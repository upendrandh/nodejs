const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'upendra',
  password: 'Upendra@2020',
  database: 'user'
});

module.exports = connection;
