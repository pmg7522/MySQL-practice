const db = require("../../config/db");
const crypto = require("crypto-js");

module.exports = (req, res, next) => {
  console.log(req.body);
  const { username, password } = req.body;

  const hash = crypto.SHA256(password, process.env.SALT).toString();

  const sql = 'INSERT INTO User(`username`, `password`) VALUES(?, ?)';
  const params = [username, password];

  db.query(sql, params, (err, row) => {
    if (err) {
      console.log(err);
    }
  });
}