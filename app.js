const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const routes = require("./routes");

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

app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/", routes)

app.get("/", (req, res, next) => {
  return res.status(200).send({ message: "Hello World" });
});

app.use((req, res, next) => {
  return res.status(404).send({ message: "API 주소를 확인해주세요." });
});

app.use((err, req, res, next) => {
  return res.status(err.status).send({
    message: err.message,
    data: {
      errorCode: err.errorCode
    }
  });
});

const server = app.listen(port, () => {
  console.log(`서버 작동중 ${port}`);
});

module.exports = server;