var basic = require('./basic');
var debug = require('debug')('xxx');
basic(function (con) {
  var sql = 'DROP TABLE aaa;';
  con.query(sql, function (err, result) {
    if (err) throw err;
    debug('log' + result);
   
  });
}, 'mydb');

