
const db = require('../../config/db');
const mysql = require('mysql');
module.exports = {
  Authenticated: _authenticated
}

function _authenticated(req, res, next) {
  var con = mysql.createConnection(db);
  var token = req.headers.authorization;
  if (!token) {
    res.status(401).send('authorization');
  }
  var sql = 'SELECT * FROM user WHERE token=?';
  con.query(sql, [token], (err, rows) => {
    if (err) {
      res.status(500).send(err);
    }
    return next();
  });
}