const pool = require("../config/db");

module.exports = {
  signUp: async (username, password) => {
    try {
      const sql = 'INSERT INTO User(`username`, `password`) VALUES(?, ?)';
      const params = [username, password];

      const userSignUp = await pool.query(sql, params);

      return userSignUp[0];
    } catch (err) {
      console.log("error", err)
    }
  },

  login: async (username, password) => {
    try {
      const sql = 'SELECT username, password FROM User WHERE username = ? AND password = ?';
      const params = [username, password];

      const currentUser = await pool.query(sql, params);

      return currentUser[0];
    } catch (err) {

    }
  },

  getInfo: async (id) => {
    try {
      const sql = 'SELECT id, username FROM User WHERE id = ?';
      const params = id;

      const userInfo = await pool.query(sql, params);

      return userInfo[0][0];
    } catch (err) {
      console.log("error", err);
    }
  },

  getList: async (page, limit) => {
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
    } catch (err) {
      console.log("error", err);
    }
  }
}