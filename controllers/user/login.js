const mysql = require('mysql');
const db = require('../../config/db');
const crypto = require('crypto-js');

const conn = mysql.createConnection(db);

module.exports = (req, res, next) => {
  const { username, password } = req.body;

  const hash = crypto.SHA256(password, process.env.SALT).toString();

  const sql = 'SELECT username, password FROM User WHERE username = ? AND password = ?';
  const params = [username, password];

  conn.query(sql, params, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      return res.status(200).send({
        message: '로그인에 성공하였습니다.'
      });
    }
  });
}