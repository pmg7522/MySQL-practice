const User = require('../../models/user');

module.exports = async (req, res, next) => {
  const { page, limit } = req.query;

  const pageInt = parseInt(page);
  const limitInt = parseInt(limit);

  const pageSize = pageInt * limitInt - limitInt;
  const limitSize = pageInt * limitInt;

  const userList = await User.getUserList(pageSize, limitSize);

  return res.status(200).send({
    message: "유저 목록 요청이 완료되었습니다.",
    data: userList
  });
};