const User = require("../../models/user");

const { notFoundUser } = require("../../error/errorcode");

module.exports = (req, res, next) => {
  const { id } = req.params;

  const userData = User.getInfo(id);

  if (!userData) {
    next(notFoundUser);
  } else {
    res.status(200).send({
      message: "유저 정보 요청이 완료되었습니다.",
      data: userData
    });
  }
};