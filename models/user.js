const mysql = require('mysql');
const db = require('../config/db');

const dbConnect = async () => {
  return await mysql.createConnection(db);
}

module.exports = {
  getUserDetail: async (id) => {
    let data = {};

    const sql = 'SELECT id, username FROM User WHERE id = ?';
    const params = id;

    const db = await dbConnect();

    const userInfo = await db.query(sql, params, (error, result) => {
      if (error) {
        console.log(error)
      } else {
        console.log(1)
        data = (JSON.parse(JSON.stringify(result)))[0];
        console.log(2, data);
        return data;
      }
    });

    await db.end();
    console.log(3)
  },

  getUserList: () => {
    const sql = 'SELECT id, username FROM User'

    con.query(sql, params, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        return result;
      }
    });
  }
}