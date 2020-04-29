const express = require('express');
const app = express();
const sql = require('mssql');


app.get('/', function (req, res) {

  // config for your database
  var config = {
    user: 'sa',
    password: '',
    server: 'localhost',
    database: 'DiplomaDB'
  };

  // connect to your database
  sql.connect(config, function (err) {

    if (err) console.log(err);

    // create Request object
    var request = new sql.Request();

    // query to the database and get the records
    request.query('select  @@version', function (err, recordset) {

      if (err) console.log(err)

      // send records as a response
      res.send(recordset);

    });
  });
});

app.get("/hello", function(req, res) {
res.send("world");
});

var server = app.listen(5000, function () {
  console.log('Server boostrap complited');
});