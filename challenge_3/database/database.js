const Promise = require('bluebird');
const createTables = require('./config.js');

var mysql = require('mysql');
var database = 'shopping';

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
  .then ((res) => {
    db.queryAsync(`USE ${database}`);
  })
  .then (() => {
    createTables(db);
  })
  .catch ((err) => {
    console.log('Error encountered during connectAsync: ', err);
  })

module.exports = db;