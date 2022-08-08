const { Router } = require("express");
const router = Router();

const tryCatch = require("../middlewares/trycatch");

const {
  userSignUp,
  userLogin,
  userDetail,
  userList,
} = require("../controllers");

router.post("/signup", tryCatch(userSignUp)); // 회원가입
router.post("/login", tryCatch(userLogin)); // 로그인

router.get("/detail/:id", tryCatch(userDetail)); // 상세정보
router.get("/list", tryCatch(userList)); // 목록

module.exports = router;