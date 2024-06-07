// Get the client
const mysql = require('mysql2');

// Test Connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'hoidanit',
    port: 3307,
    password: '123456',
  });
  

module.exports = connection;