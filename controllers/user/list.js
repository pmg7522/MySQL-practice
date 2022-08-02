const User = require('../../models/user');

module.exports = async (req, res, next) => {
  const { page, limit } = req.query;

  const userData = await User.getUserDetail(id);

  return res.status(200).send({
    message: "유저 정보 요청이 완료되었습니다.",
    data: userData
  });
};