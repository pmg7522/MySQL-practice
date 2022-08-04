const pool = require("../config/db");

module.exports = {
  getUserDetail: async (id) => {
    try {
      const sql = 'SELECT id, username FROM User WHERE id = ?';
      const params = id;

      const userInfo = await pool.query(sql, params);

      return userInfo[0][0];
    }
    catch (err) {
      console.log("error", err);
    }
  },

  getUserList: async (page, limit) => {
    try {
      const listSql = 'SELECT SQL_CALC_FOUND_ROWS id, username FROM User limit ?, ?';
      const countSql = 'SELECT FOUND_ROWS() as totalCount'
      const params = [page, limit];

      const userInfo = await pool.query(listSql, params);
      const countQuery = await pool.query(countSql);

      const data = {
        userList: userInfo[0],
        totalCount: countQuery[0][0].totalCount,
      }

      return data;
    }
    catch (err) {
      console.log("error", err);
    }
  }
}