var response = require('../model/Responses');
var db = require('./db');
var md5 = require('md5');
module.exports = {
  login: _login
}

function _login(username, password, con, cb) {
  var response = {};
  var sql = 'SELECT * FROM `user` WHERE username=? AND password=?';
  db.query(sql, [username, md5(password)], con)
    .then(data => {
      if (!data || data.length > 1) {
        response.status = 0;
        response.message = 'error';
        callback(cb, response);
        return;
      }

      var user = data[0];
      if(user && !user.token) {
          user.token =  md5(new Date().getTime());
          var sqlUpdate = 'UPDATE `user` SET token = "' + user.token + '" WHERE id = ?';
          db.query(sqlUpdate, user.id, con);
      }
      delete user.password;
      delete user.id;
      response.status = 1;
      response.message = 'success';
      response.data = user;
      callback(cb, response);
    })
    .catch(err => {
      console.log(err);
      callback(cb, {status: 0, message: err.sqlMessage});
    });

  function callback(cb, data) {
    if (typeof cb == 'function') {
      cb(data);
    }
  }
}

