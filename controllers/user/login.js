const User = require('../../models/user');
const crypto = require('crypto-js');

module.exports = (req, res, next) => {
  const { username, password } = req.body;

  const hash = crypto.SHA256(password, process.env.SALT).toString();

  const currentUser = User.login(username, hash);

  if (!currentUser) {
    return res.status(200).send({
      message: '로그인에 성공하였습니다.'
    });
  } else {
    return res.status(400).send({
      message: '아이디나 비밀번호가 일치하지 않습니다.'
    })
  }
}