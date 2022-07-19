import { db } from "./config/db.js";
import crypto from "crypto-js"

const { username, password } = req.body;

const hash = crypto.SHA256(password, process.env.SALT).toString();

const sql = `SELECT username, password FROM User WHERE username = ${username} AND password = ${hash}`;

db.query(sql, (err, row) => {
  if (err) {
    console.log(err);
  }
});