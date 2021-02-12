const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'upendhar',
  password: 'Upendhar@2020',
  database: 'user'
});

module.exports = connection;
