const User = require("../../models/user");

module.exports = (req, res, next) => {
  const { page, limit, keyword } = req.query;

  const pageInt = parseInt(page); // 요청 페이지 수
  const limitInt = parseInt(limit); // 요청 데이터 수

  // 페이지네이션 쿼리
  const pageSize = pageInt * limitInt - limitInt;
  const limitSize = pageInt * limitInt;

  const listData = User.getList(pageSize, limitSize);

  // 총 페이지 수 (올림)
  const totalPage = Math.ceil(limitSize / listData.totalCount);

  if (!listData.length) {
    res.status(204).send({
      message: "유저가 존재하지 않습니다.",
      data: [],
      totalCount: 0,
      totalPage: 1,
      nowPage: pageInt,
      searchKeyword: keyword,
    });
  } else {
    res.status(200).send({
      message: "유저 목록 요청이 완료되었습니다.",
      data: listData.userList,
      totalCount: listData.totalCount,
      totalPage,
      nowPage: pageInt,
      searchKeyword: keyword,
    });
  }
};