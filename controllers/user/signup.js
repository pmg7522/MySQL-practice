const mysql = require('mysql');
const db = require("../../config/db");
const crypto = require("crypto-js");

const conn = mysql.createConnection(db);

module.exports = (req, res, next) => {
  const { username, password } = req.body;

  const hash = crypto.SHA256(password, process.env.SALT).toString();

  const sql = 'INSERT INTO User(`username`, `password`) VALUES(?, ?)';
  const params = [username, password];

  conn.connect();

  conn.query(sql, params, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      return res.status(201).send({
        message: "회원가입이 완료되었습니다.",
        data: username
      });
    }
  });

  conn.end();
}