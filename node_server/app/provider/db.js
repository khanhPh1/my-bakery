module.exports = {
  query: _query
}
function _query(sql, data, con) {
  return new Promise(function (resolve, reject) {
    con.query(sql, data, (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    });
  });
}