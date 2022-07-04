import mysql from "mysql";
import dotenv from "dotenv";

import { config } from "../config/config.js";
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