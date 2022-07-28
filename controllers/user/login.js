const mysql = require('mysql');
const db = require("../../config/db");
const crypto = require("crypto-js");

const conn = mysql.createConnection(db);

module.exports = (req, res, next) => {
  const { username, password } = req.body;

  const hash = crypto.SHA256(password, process.env.SALT).toString();

  const sql = `SELECT username, password FROM User WHERE username = ? AND password = ?`;
  const params = [username, password];

  conn.connect();

  conn.query(sql, params, (err, row) => {
    if (err) {
      console.log(err);
    } else {
      console.log(row)
    }
  });

  conn.end();
}