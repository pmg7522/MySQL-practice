const User = require('../../models/user');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const userData = await User.getUserDetail(id);

  console.log(userData);
}