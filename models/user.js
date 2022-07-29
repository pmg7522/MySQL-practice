const mysql = require('mysql');
const db = require('../config/db');

const con = mysql.createConnection(db);

module.exports = {
  getUserDetail: (id) => {
    const sql = 'SELECT id, username FROM User WHERE id = ?';
    const params = id

    con.connect();

    con.query(sql, params, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        return result.toJSON();
      }
    });

    con.end();
  },

  getUserList: () => {
    const sql = 'SELECT id, username FROM User'

    con.connect();

    con.query(sql, params, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        return result;
      }
    });

    con.end();
  }
}