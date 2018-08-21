var response = require('../model/Responses');
var db = require('./db');
var md5 = require('md5');
module.exports = {
  getlist: _getlist
}

function _getlist(con, cb) {
  var response = {};
  var sql = "SELECT store.* FROM store " +
    "INNER JOIN user_store ON user_store.store_id = store.id  " +
    "INNER JOIN `user` ON `user`.id = user_store.user_id  " +
    "WHERE `user`.id=?";
  db.query(sql, [1], con)
    .then(data => {
      if (!data) {
        response.status = 0;
        response.message = 'error';
        callback(cb, response);
        return;
      }
      response.status = 1;
      response.message = 'success';
      response.data = data;
      callback(cb, response);
    })
    .catch(err => {
      console.log(err);
      callback(cb, { status: 0, message: err.sqlMessage });
    });

  function callback(cb, data) {
    if (typeof cb == 'function') {
      cb(data);
    }
  }
}

