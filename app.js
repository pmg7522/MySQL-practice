import express from "express";
import cors from "cors";

import { db } from "./config/config.js";

const conn = db.init();
db.connect(conn);

const app = express();
const port = 3000;

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

const server = app.listen(port, () => {
  console.log(`서버 작동중 ${port}`);
});

export default server;