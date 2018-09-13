const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const db = require('./config/db');
const port = 8000;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Expose-Headers', 'X-Api-Version, X-Request-Id, X-Response-Time');
  res.setHeader('Access-Control-Max-Age', '1000');
  next(); 
});

var con = mysql.createConnection(db);

con.connect(function(err) {
  if (err) throw err;
});
require('./app/routes')(app, con);

app.listen(port, () => {
  console.log('We are live on ' + port);
});