import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

const server = app.listen(port, () => {
  console.log(`${port}로 작동중.`);
})

export default server;