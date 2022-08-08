const pool = require("../config/db");

module.exports = {
  // 회원가입
  signUp: async (username, password) => {
    try {
      const sql = 'INSERT INTO User(`username`, `password`) VALUES(?, ?)';
      const params = [username, password];

      const userSignUp = await pool.query(sql, params);

      return userSignUp[0];
    } catch (err) {
      console.log(err);
    }
  },

  // 로그인
  login: async (username, password) => {
    try {
      const sql = 'SELECT username, password FROM User WHERE username = ? AND password = ?';
      const params = [username, password];

      const currentUser = await pool.query(sql, params);

      return currentUser[0];
    } catch (err) {
      console.log(err);
    }
  },

  // 상세정보
  getInfo: async (id) => {
    try {
      const sql = 'SELECT id, username FROM User WHERE id = ?';
      const params = id;

      const userInfo = await pool.query(sql, params);

      return userInfo[0][0];
    } catch (err) {
      console.log(err);
    }
  },

  // 목록
  getList: async (page, limit) => {
    try {
      const listSql = 'SELECT SQL_CALC_FOUND_ROWS id, username FROM User limit ?, ?'; // 페이지네이션
      const countSql = 'SELECT FOUND_ROWS() as totalCount' // 총 데이터 수

      const params = [page, limit];

      const userInfo = await pool.query(listSql, params); // 페이지네이션
      const countQuery = await pool.query(countSql); // 총 데이터 수

      const data = {
        userList: userInfo[0],
        totalCount: countQuery[0][0].totalCount,
      };

      return data;
    } catch (err) {
      console.log(err);
    }
  }
}