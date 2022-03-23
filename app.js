const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PATCH", "OPTIONS", "DELETE"],
    credentials: true,
  })
);

const port = 3000;

const server = app.listen(port, () => {
  console.log(`서버가 ${port}번에서 작동중입니다.`);
});

module.exports = server;
