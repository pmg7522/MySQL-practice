import express from "express";
import cors from "cors";

import db from "./db/index.js"

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
  console.log(`${port}로 작동중.`);
});

export default server;