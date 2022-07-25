const mysql = require("mysql");
const config = require("../config/config.js");

const dotenv = require("dotenv");
dotenv.config();


const db = mysql.createConnection(
  config[process.env.NODE_ENV]
);

db.connect((err) => {
  if (err) {
    console.log("db 연결 실패", err);
  } else {
    console.log("db 연결 성공");
  }
});

export default db;