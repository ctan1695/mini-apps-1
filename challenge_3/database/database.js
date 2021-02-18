var mysql = require('mysql');
var database = 'shopping';
const createTables = require('config.js');

var connection = mysql.createConnection({
  host: 'http://localhost:3000',
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