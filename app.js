const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const db = require("./config/db.js");

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
app.use(morgan(':method :url | :status | :response-time ms | :date[iso] | '));

const server = app.listen(port, () => {
  console.log(`서버 작동중 ${port}`);
});

module.exports = server;