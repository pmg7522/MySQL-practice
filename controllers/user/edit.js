const User = require("../../models/user");
const crypto = require("crypto-js");

const { invalidLoginData } = require("../../error/errorcode");

module.exports = (req, res, next) => {
  const { username, password } = req.body;

  if (!username) {
    next(emptyUsername);
  } else if (!password) {
    next(emptyPassword);
  } else {
    // 비밀번호 암호화
    const hash = crypto.SHA256(password, process.env.SALT).toString();

    const userEdit = User.editInfo(id, hash);

    res.status(200).send({
      message: "정보 수정이 완료되었습니다."
    });
  }
}