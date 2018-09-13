var Responses = require('../model/Responses');
var constant = require('../config/constant');
var db = require('./db');
var md5 = require('md5');
module.exports = {
  login: _login
}

function _login(username, password, con, cb) {
  var response = new Responses();
  var sql = 'SELECT * FROM `user` WHERE email=? AND password=?';
  db.query(sql, [username, md5(password)], con)
    .then(data => {
      if (!data || data.length > 1) {
        response.status = constant.RESPONSE_ERROR_STATUS;
        response.message = 'error';  
        callback(cb, response);
        return;
      }

      var user = data[0];
      if(!user) {
        response.status = constant.RESPONSE_ERROR_STATUS;
        response.message = constant.RESPONSE_ERROR_MESSAGE_NOT_FOUND;
        callback(cb, response);
      }      
      
      if(user && !user.token) {
          user.token =  md5(new Date().getTime());
          var sqlUpdate = 'UPDATE `user` SET token = "' + user.token + '" WHERE id = ?';
          db.query(sqlUpdate, user.id, con);
      }
      delete user.password;
      delete user.id;
      response.status = constant.RESPONSE_SUCCESS_STATUS;
      response.message = 'success';
      response.data = user;
      callback(cb, response);
    })
    .catch(err => {
      callback(cb, {status: 0, message: err.sqlMessage});
    });

  function callback(cb, data) {
    if (typeof cb == 'function') {
      cb(data);
    }
  }
}

