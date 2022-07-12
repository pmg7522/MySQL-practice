import mysql from "mysql";

import dotenv from "dotenv";
dotenv.config();

const {
  DATABASE_HOST,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_NAME
} = process.env

const dbConfig = {
  host: DATABASE_HOST,
  user: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME
}

export const db = {
  init: () => {
    return mysql.createConnection(dbConfig);
  },
  connect: (conn) => {
    conn.connect((err) => {
      if (err) {
        console.log("db 연결 실패", err);
      } else {
        console.log("db 연결 성공");
      }
    })
  }
};
