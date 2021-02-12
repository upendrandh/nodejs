const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'upendra',
  password: 'upendra',
  database: 'user'
});

module.exports = connection;
