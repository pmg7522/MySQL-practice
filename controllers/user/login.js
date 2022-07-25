const db = require("./config/db.js");
const crypto = require("crypto-js");

module.exports = (req, res, next) => {
  const { username, password } = req.body;

  const hash = crypto.SHA256(password, process.env.SALT).toString();

  const sql = `SELECT username, password FROM User WHERE username = ? AND password = ?`;
  const params = [username, password];

  db.query(sql, params, (err, row) => {
    if (err) {
      console.log(err);
    }
  });
}