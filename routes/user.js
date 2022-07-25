const { Router } = require("express");
const tryCatch = require("../middlewares/trycatch");

const router = Router();

router.post("/signup", trycatch())

