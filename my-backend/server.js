const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const accessTokenSecret = 'youraccesstokensecret';

const adminUserType = 0;
const studentUserType = 1;
const organizationUserType = 2;

let originsWhitelist = ['http://localhost:4200'];
let corsOptions = {
    origin: function (origin, callback) {
        let isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
    }
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

let connectionInfo = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'diplom',
    port: '3306',
    connectionLimit: 5
};

const pool = mysql.createPool(connectionInfo);

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'diplom'
});

connection.connect(function (err) {
    // in case of error
    if (err) {
        console.log(err.code);
        console.log(err.fatal);
    }
});


function getTableNameByRole(role) { //функция для возвращения таблицы по роли пользователя
    switch (role) {
        case adminUserType:
            return "admin";
        case studentUserType:
            return "student";
        case organizationUserType:
            return "organization";
    }
}


 // регистрация студента
// app.post("/signup/student", function (req, res) {

//     let fio = req.body.fio;
//     let faculty = req.body.faculty;
//     let groupNumber = req.body.group;
//     let tel = req.body.tel;
//     let portfolio = req.body.portfolio;
//     let contacts = req.body.contacts;
//     let email = req.body.email;
//     let password = req.body.password;


//     pool.query("INSERT INTO users (email, password) VALUES (?,?)", [email, password], function (err, insertData) {
//         pool.query("INSERT INTO student (userId, fio, faculty, groupNumber, tel, portfolio, contacts) VALUES (?,?,?,?,?,?,?)", [insertData.insertId, fio, faculty, groupNumber, tel, portfolio, contacts], function (err, data) {
//             if (err) return console.log(err);
//             res.sendStatus(200);
//         });
//     });
// });


//регистрация студента
app.post("/signup/student", (request, response) => {

    let email = request.body.email;
    let password = request.body.password;
    let fio = request.body.fio;
    let faculty = request.body.faculty;
    let groupNumber = request.body.groupNumber;
    let tel = request.body.tel;
    let portfolio = request.body.portfolio;
    let contacts = request.body.contacts;

    let insertStudentSQLQuery = "insert into student (fio, faculty, groupNumber, tel, portfolio, contacts) values (?,?,?,?,?,?)";
    let insertStudentSQLParameters = [fio, faculty, groupNumber, tel, portfolio, contacts];

    pool.query(insertStudentSQLQuery, insertStudentSQLParameters, (insertStudentError, insertStudentResult) => {
        
        if (insertStudentError) {
            console.log("Не удалось сохранить студента.", insertStudentError);
            return response.sendStatus(500);

        }

        console.info(`Удачное сохранение студента с id: ${insertStudentResult.insertId}`);

        let insertUserSQLQuery = "insert into users (email, password, role, referenceId) values (?, ?, ?, ?)";
        let insertUserSQLParameters = [email, password, studentUserType, insertStudentResult.insertId];

        pool.query(insertUserSQLQuery, insertUserSQLParameters, (insertUserError, insertUserResult) => {

            if (insertUserError) {
                console.log("Не удалось сохранить пользователя.", insertUserError);
                return response.sendStatus(500);
            }

            console.info(`Удачное сохранение пользователя с id: ${insertUserResult.insertId}`);

            let accessToken = jwt.sign({ 
                userId: insertUserResult.insertId, 
                role: studentUserType, 
                referenceId: insertStudentResult.insertId 
            }, accessTokenSecret);

            let userData = { // Здесь лежат все публичные данные о студенте, которые нужно вернуть пользователю
                id: insertStudentResult.insertId,
                fio: fio,
                faculty: faculty,
                groupNumber: groupNumber,
                tel: tel,
                portfolio: portfolio,
                contacts: contacts
            }

            return response.json({
                accessToken: accessToken,
                userData: userData
            });
        });
    });
});

//регистрация организации
app.post("/signup/organization", (request, response) => {

    let email = request.body.email;
    let password = request.body.password;
    let name = request.body.name;
    let description = request.body.description;
    let address = request.body.description;
    let tel = request.body.tel;

    let insertOrganizationSQLQuery = "insert into organization (name, description, address, tel) values (?,?,?,?)";
    let insertOrganizationSQLParameters = [name, description, address, tel];

    pool.query(insertOrganizationSQLQuery, insertOrganizationSQLParameters, (insertOrganizationError, insertOrganizationResult) => {
        
        if (insertOrganizationError) {
            console.error("Не удалось сохранить организацию.", insertOrganizationError);
            return response.sendStatus(500);
        }

        console.info(`Удачное сохранение организации с id: ${insertOrganizationResult.insertId}`);

        let insertUserSQLQuery = "insert into users (email, password, role, referenceId) values (?, ?, ?, ?)";
        let insertUserSQLParameters = [email, password, organizationUserType, insertOrganizationResult.insertId];

        pool.query(insertUserSQLQuery, insertUserSQLParameters, (insertUserError, insertUserResult) => {

            if (insertUserError) {
                console.error("Не удалось сохранить пользователя.", insertUserError);
                return response.sendStatus(500);
            }

            console.info(`Удачное сохранение пользователя с id: ${insertUserResult.insertId}`);

            let accessToken = jwt.sign({ 
                userId: insertUserResult.insertId, 
                role: organizationUserType, 
                referenceId: insertOrganizationResult.insertId 
            }, accessTokenSecret);

            let userData = { // Здесь лежат все публичные данные об организации, которые нужно вернуть пользователю
                id: insertOrganizationResult.insertId,
                name: name,
                description: description,
                address: address,
                tel: tel
            }

            return response.json({
                accessToken: accessToken,
                userData: userData
            });
        });
    });
});


app.post("/login", (request, response) => {

    let email = request.body.email;
    let password = request.body.password;

    let selectUserQuery = 'SELECT * FROM users WHERE email="' + email + '" AND password="' + password + '"';

    pool.query(selectUserQuery, (selectUserError, selectUserResult) => {

        if (selectUserError) {
            console.log("Возникла ошибка при поиске пользователя.", selectUserError);
            return response.sendStatus(500);
        }

        console.info(`Найден пользователь: ${JSON.stringify(selectUserResult)}`);
        
        let selectedUser = selectUserResult[0];

        if (!selectedUser) {
            console.log("Возникла ошибка при поиске пользователя под индексом 0");
            return response.sendStatus(404);
        }

        let selectReferenceUserSQLQuery = `select * from ${getTableNameByRole(selectedUser.role)} where id=${selectedUser.referenceId}`;
        console.log(selectReferenceUserSQLQuery);

        pool.query(selectReferenceUserSQLQuery, (selectReferenceUserError, selectReferenceUserResult) => {

            if (selectReferenceUserError) {
                console.log("Возникла ошибка при поиске ссылочного пользователя.", selectReferenceUserError);
                return response.sendStatus(500);
            }

            console.info(`Найден ссылочный пользователь: ${JSON.stringify(selectReferenceUserResult)}`);

            let accessToken = jwt.sign({ 
                userId: selectedUser.id, 
                role: selectedUser.role, 
                referenceId: selectedUser.referenceId 
            }, accessTokenSecret);

            return response.json({
                accessToken: accessToken,
                userData: selectReferenceUserResult
            });
        });
    });
});

const checkAuthorizationMiddleware = (request, response, next) => { // функция для проверки каждого авторизованного пользователя
    let accessToken = request.headers.authorization;

    if (accessToken) {
        console.log("Полученный jsonwebtoken", accessToken);

        jwt.verify(accessToken, accessTokenSecret, (error, jwtData) => { // проверка на валидность токена
            if (error) {
                console.error("Не удалось распарсить JWT.", JSON.stringify(error));
                return response.sendStatus(403);
            }
            console.log(`Присланные данные из jwt: ${JSON.stringify(jwtData)}`);

            let jwtDataDecoded = jwt.decode(accessToken);

            console.log(`Декодированные данные из jwt: ${JSON.stringify(jwtDataDecoded)}`);
            request.jwtData = jwtData;
            next();
        });

    } else {
        return response.sendStatus(401);
    }
    
};

// const checkStudentOnlyMiddleware = (request, response, next) => { // функция для проверки только студента
//     let jwtData = request.jwtData;

//     if (jwtData) {
//         console.error("Этот middleware должен быть в связке после провкерки на авторизацию");
//         return response.sendStatus(401);
//     }

//     if (jwtData.role == studentUserType) {
//         next();
//     } else {
//         console.error("Доступ к этому руту есть только у пользователей с ролью 'Студент'");
//         return response.sendStatus(403);
//     }
// };

const checkRoleMiddleware = function(roles) { //функция для проверки доступа нескольких ролей
    return (request, response, next) => {
        let jwtData = request.jwtData;

        if (jwtData) {
            console.error("Этот middleware должен быть в связке после провкерки на авторизацию");
            return response.sendStatus(401);
        }

        if (roles.includes(jwtData.role)) {
            next();
        } else {
            console.error(`Доступ к этому руту есть только у пользователей с ролями ${roles}`);
            return response.sendStatus(403);
        }
    }
}

app.get("/self", checkAuthorizationMiddleware, (request, response) => {
    let jwtData = request.jwtData;

    console.log(`Данные внутри jwt: ${JSON.stringify(jwtData)}`);

    let selectReferenceUserSQLQuery = `select * from ${getTableNameByRole(jwtData.role)} where id=${jwtData.referenceId}`;

    pool.query(selectReferenceUserSQLQuery, (error, data) => {

        if (error) {
            console.error(`Не удалось найти ссылочного пользователя по id: ${jwtData.id}.`, JSON.stringify(error));
            return response.sendStatus(500);
        }

        console.info(`Найден ссылочный пользователь с id: ${data.id}`);

        return response.json({
            userMetadata: {
                id: jwtData.id,
                role: jwtData.role
            },
            userData: data
        });
    });
});

app.post("apply-ticket", checkAuthorizationMiddleware, checkRoleMiddleware([studentUserType]), (request, response) => {

});

// //регистрация организации
// app.post("/signup/organization", function (req, res) {

//     let name = req.body.name;
//     let description = req.body.description;
//     let address = req.body.address;
//     let tel = req.body.tel;
//     let email = req.body.email;
//     let password = req.body.password;
//     let role = req.body.role;


//     pool.query("INSERT INTO users (email, password, role) VALUES (?,?,?)", [email, password, role], function (errWhileInsert, dataOnInsertComplited) {
//         console.log("dataOnInsertComplited", dataOnInsertComplited.insertId, errWhileInsert);
//         console.log("password", password);

//         // pool.query("SELECT * from users WHERE email=?, password=?", [email, password], function (errWhileSelect, dataOnSelectComplited) {
//         //     console.log("dataOnSelectComplited", dataOnSelectComplited, errWhileSelect);
//         pool.query("INSERT INTO organization (userId ,name, description, address, tel) VALUES (?,?,?,?,?)", [dataOnInsertComplited.insertId, name, description, address, tel], function (err, data) {
//             if (err) return console.log(err);
//             res.sendStatus(200);
//         });
//         // });
//     });
// });




//авторизация
// app.post('/login', (req, res) => {
//     // Read username and password from request body
//     let email = req.body.email;
//     let password = req.body.password;
//     let query = 'SELECT * FROM users WHERE email="' + email + '" AND password="' + password + '"';
//     pool.query(query, function (err, data) {
//         // if (err) return console.log(err);

//         //  console.log(data);
//         // res.json(data);
//         // if (data) {
//         // Generate an access token
//         const accessToken = jwt.sign({
//             email: data.email,
//             password: data.password,
//             role: data.role
//         }, accessTokenSecret);
//         return res.json({
//             accessToken
//         });
//         // } else {
//         //     res.send('Username or password incorrect');
//         // }
//     });
//     // Filter user from the users array by username and password
//     // const user = users.find(u => { return u.email === email && u.password === password });

//     // if (data) {
//     //     // Generate an access token
//     //     const accessToken = jwt.sign(data, accessTokenSecret);

//     //     res.json({
//     //         accessToken
//     //     });
//     // } else {
//     //     res.send('Username or password incorrect');
//     // }
// });


// const authenticateJWT = (req, res, next) => {
//     const authHeader = req.headers.authorization;

//     if (authHeader) {
//         const token = authHeader.split(' ')[1];

//         jwt.verify(token, accessTokenSecret, (err, user) => {
//             if (err) {
//                 return res.sendStatus(403);
//             }

//             req.user = user;
//             next();
//         });
//     } else {
//         res.sendStatus(401);
//     }
// };


// app.get('/books', authenticateJWT, (req, res) => {
//     res.json(books);
// });

app.get("/admin_profile", function (req, res) {
    pool.query("SELECT * FROM organization", function (err, data) {
        if (err) return console.log(err);

        console.log(data);
        res.json(data);
    });
});

//редактировать профиль студента
app.post("/edit", function (req, res) {

    let fio = req.body.fio;
    let faculty = req.body.faculty;
    let groupNumber = req.body.group;
    let tel = req.body.tel;
    let portfolio = req.body.portfolio;
    let contacts = req.body.contacts;
    const id = req.body.id;

    pool.query("UPDATE student SET fio=?, faculty=?, groupNumber=?, tel=?, portfolio=?, contacts=? WHERE id=?", [fio, faculty, groupNumber, tel, portfolio, contacts, id], function (err, data) {
        if (err) return console.log(err);

        res.json(data);
    });
});

//редактировать профиль организации
app.post("/edit", function (req, res) {

    let name = req.body.name;
    let description = req.body.description;
    let address = req.body.address;
    let tel = req.body.tel;
    const id = req.body.id;

    pool.query("UPDATE student SET  WHERE id=?", [name, description, address, tel, id], function (err, data) {
        if (err) return console.log(err);

        res.json(data);
    });
});

// получить список всех организаций
app.get("/organization_list", function (req, res) {
    pool.query("SELECT * FROM organization", function (err, data) {
        if (err) return console.log(err);

        console.log(data);
        res.json(data);
    });
});
// получить список всех студентов
app.get("/student_list", function (req, res) {
    pool.query("SELECT * FROM student", function (err, data) {
        if (err) return console.log(err);

        console.log(data);
        res.json(data);
    });
});

// получить список задач от организации
app.get("/organization_profile/:id/tasks", function (req, res) {
    const id = req.body.id;

    pool.query("SELECT * FROM task WHERE organizationId =?", [id], function (err, data) {
        if (err) return console.log(err);

        console.log(data);
        res.json(data);
    });
});

// получить все задачи для администратора
app.get("/admin_tasks", function (req, res) {
    pool.query("SELECT * FROM task", function (err, data) {
        if (err) return console.log(err);

        console.log(data);
        res.json(data);
    });
});

// получить все отзывы для администратора
app.get("/admin_feedback", function (req, res) {
    pool.query("SELECT * FROM review", function (err, data) {
        if (err) return console.log(err);

        console.log(data);
        res.json(data);
    });
});

// удалить задачу в роли администратора
app.delete("/admin_tasks/:id", function (req, res) {
    const id = req.params.id;

    pool.query("DELETE FROM task WHERE id=?", [id], function (err, data) {
        if (err) return console.log(err);

        console.log(data);
        res.json(data);
    });
});

// редактировать задачу в роли администратора
app.post("/admin_tasks/:id", function (req, res) {

    let description = req.body.description;
    let skills = req.body.address;
    let type = req.body.type;
    let maxAmount = req.body.maxAmount;
    const id = req.body.id;

    pool.query("UPDATE task SET description=?, skills=?, type=?, maxAmount=?  WHERE id=?", [description, skills, type, maxAmount, id], function (err, data) {
        if (err) return console.log(err);

        res.json(data);
    });
});


app.listen(port, function () {
    console.log(`server started at ${port}`);
});

// Close the connection
connection.end(function () {
    // The connection has been closed
});