const User = require('../../models/user');
const crypto = require("crypto-js");

module.exports = (req, res, next) => {
  const { username, password } = req.body;

  // 비밀번호 암호화
  const hash = crypto.SHA256(password, process.env.SALT).toString();

  const signUp = User.signUp(username, hash)

  return res.status(201).send({
    message: "회원가입이 완료되었습니다.",
    data: username
  });
}