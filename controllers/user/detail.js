const User = require('../../models/user');

module.exports = (req, res, next) => {
  const { id } = req.params;

  const userData = User.getInfo(id);

  return res.status(200).send({
    message: "유저 정보 요청이 완료되었습니다.",
    data: userData
  });
};