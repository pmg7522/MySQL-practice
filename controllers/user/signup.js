import { db } from "./config/db.js";
import crypto from "crypto-js"

const { username, password } = req.body;

const hash = crypto.SHA256(adminPassword, process.env.SALT).toString();

db.query(INSERT INTO User(`username`, `password`), VALUES(username, hash));
