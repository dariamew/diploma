const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;
const cors = require('cors');

let originsWhitelist = ['http://localhost:4200'];
let corsOptions = {
    origin: function(origin, callback){
        let isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
    }
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

let connectionInfo = {
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'diplom',
    port     : '3306',
    connectionLimit: 5
};

const pool = mysql.createPool(connectionInfo);

let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'diplom'
});

connection.connect(function(err) {
    // in case of error
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }
});

$query = 'SELECT * from users';

connection.query($query, function(err, rows, fields) {
    if(err){
        console.log("An error ocurred performing the query.");
        return;
    }

    console.log("Query succesfully executed: ", rows);
});
// регистрация
app.post("/signup/student", function (req, res) {
    if(!req.body) return res.sendStatus(400);
    

});
app.post("/signup/organization", function (req, res) {
    if(!req.body) return res.sendStatus(400);
    

});
// получить список всех организаций
app.get("/organization_list", function(req, res) { 
    pool.query("SELECT * FROM organization", function(err, data) {
      if(err) return console.log(err);

      console.log(data);
      res.json(data);
    });
});
// получить список всех студентов
app.get("/student_list", function(req, res) { 
    pool.query("SELECT * FROM student", function(err, data) {
      if(err) return console.log(err);

      console.log(data);
      res.json(data);
    });
});

app.listen(port, function(){
    console.log(`server started at ${port}`);
});

// Close the connection
connection.end(function(){
    // The connection has been closed
});