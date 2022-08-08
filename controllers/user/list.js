const User = require('../../models/user');

module.exports = (req, res, next) => {
  const { page, limit, keyword } = req.query;

  const pageInt = parseInt(page); // 요청 페이지 수
  const limitInt = parseInt(limit); // 요청 데이터 수

  // 페이지네이션 쿼리
  const pageSize = pageInt * limitInt - limitInt;
  const limitSize = pageInt * limitInt;

  const listData = User.getList(pageSize, limitSize);

  const totalPage = Math.ceil(limitSize / listData.totalCount); // 총 페이지 수 (올림)

  return res.status(200).send({
    message: "유저 목록 요청이 완료되었습니다.",
    data: listData.userList,
    totalCount: listData.totalCount,
    totalPage,
    nowPage: pageInt,
    searchKeyword: keyword,
  });
};