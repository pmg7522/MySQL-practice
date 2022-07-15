import { db } from "./config/db.js";
import crypto from "crypto-js"

const { username, password } = req.body;
const params = [username, password];

const hash = crypto.SHA256(adminPassword, process.env.SALT).toString();
const sql = 'INSERT INTO User(`username`, `password`), VALUES(?, ?,)';

db.query(sql, params, (err, row) => {
  if (err) {
    console.log(err);
  }
});