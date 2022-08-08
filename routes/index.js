const { Router } = require("express");
const router = Router();

// 유저 라우터
const user = require("./user");
router.use("/user", user);

module.exports = router;