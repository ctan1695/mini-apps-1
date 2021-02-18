const express = require('express');
const bodyParser = require('body-parser');
const Promise = require('bluebird');
const app = express();
const port = 3000;


var mysql = require('mysql');
var database = 'shopping';
const createTables = require('./database/config.js');

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'shopping'
});

var db = Promise.promisifyAll(connection, {multiArgs: true});

connection.connectAsync()
  .then (() => {
    console.log(`Successfully connected to database: ${database}`);
  })
  .then (() => {
    db.queryAsync(`CREATE DATABASE IF NOT EXISTS ${database}`);
  })
  .then (() => {
    db.queryAsync(`USE DATABASE ${database}`);
  })
  .then ((database) => {
    createTables(database);
  })
  .catch ((err) => {
    console.log('Error encountered during connectAsync: ', err);
  })

module.exports.db = db;



app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/checkout', (req, res) => {
  //Insert into DB (orders table)
  //For primary key just inserted, send back to client in response.
  res.send('done');
})

app.post('/name', (req, res) => {
  console.log('req.body: ', req.body);
  //Insert into DB for inputted values with user_id = inputted user id.
  res.send('done');
})


app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
})