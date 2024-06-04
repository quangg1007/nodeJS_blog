const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine} = require ('express-handlebars');
const app = express();
const port = 3003;

// Get the client
const mysql = require('mysql2');

app.use(express.static(path.join(__dirname,'public')));

// HTTP logger
app.use(morgan('combined'));

// Test Connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'hoidanit',
  port: 3307,
  password: '123456',
});

connection.query(
  'SELECT * FROM Users u',
  function(err, results, fields) {
  console.log(results); 
  console.log(fields);
  }
);

// Template engine
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set("views", path.join(__dirname,'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.get('/test', (req, res) => {
  res.render('test');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})