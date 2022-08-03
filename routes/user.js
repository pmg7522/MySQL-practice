const { Router } = require("express");
const router = Router();

const tryCatch = require("../middlewares/trycatch");

const {
  userSignUp,
  userLogin,
  userDetail,
  userList,
} = require("../controllers");

router.post("/signup", tryCatch(userSignUp));
router.post("/login", tryCatch(userLogin));

router.get("/detail/:id", tryCatch(userDetail));
router.get("/list", tryCatch(userList));

module.exports = router;