const pool = require("../config/db");

// const dbConnect = async () => {
//   return await mysql.createConnection(db);
// }

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

  getUserList: async () => {
    const sql = 'SELECT id, username FROM User limit ? ?'

    try {
      const userInfo = await pool.query(sql, params);

      return userInfo[0];
    } catch (err) {
      console.log("error", err);
    }
  }
}