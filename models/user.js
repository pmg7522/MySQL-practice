const pool = require("../config/db");

module.exports = {
  getUserDetail: async (id) => {
    const sql = 'SELECT id, username FROM User WHERE id = ?';
    const params = id;

    try {
      const userInfo = await pool.query(sql, params);

      return userInfo[0][0];
    } catch (err) {
      console.log("error", err);
    }
  },

  getUserList: async (page, limit) => {
    const sql = 'SELECT id, username FROM User limit ?, ?';
    const params = [page, limit];
    try {
      const userInfo = await pool.query(sql, params);

      return userInfo[0];
    } catch (err) {
      console.log("error", err);
    }
  }
}