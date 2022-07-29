const { Router } = require("express");
const router = Router();

const tryCatch = require("../middlewares/trycatch");

const {
  userSignUp,
  userLogin,
  userDetail,
} = require("../controllers");

router.post("/signup", tryCatch(userSignUp));
router.post("/login", tryCatch(userLogin));

router.get("/detail/:id", tryCatch(userDetail));

module.exports = router;