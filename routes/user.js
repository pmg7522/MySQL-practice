const { Router } = require("express");
const router = Router();

const tryCatch = require("../middlewares/trycatch");

const {
  userSignUp,
  userLogin,
} = require("../controllers");

router.post("/signup", tryCatch(userSignUp));
router.post("/login", tryCatch(userLogin));

module.exports = router;