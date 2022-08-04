const User = require('../../models/user');

module.exports = async (req, res, next) => {
  const { page, limit, keyword } = req.query;

  const pageInt = parseInt(page);
  const limitInt = parseInt(limit);

  let searchKeyword = "";

  if (keyword) {
    searchKeyword = decodeURIComponent(keyword);
  }

  const pageSize = pageInt * limitInt - limitInt;
  const limitSize = pageInt * limitInt;

  const listData = await User.getUserList(pageSize, limitSize);

  const totalPage = Math.ceil(limitSize / listData.totalCount);

  return res.status(200).send({
    message: "유저 목록 요청이 완료되었습니다.",
    data: listData.userList,
    totalCount: listData.totalCount,
    totalPage,
    nowPage: pageInt,
    searchKeyword,
  });
};