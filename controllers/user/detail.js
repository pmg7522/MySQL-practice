const User = require('../../models/user');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  console.log(1)
  const userData = await User.getUserDetail(id);
};
  // console.log(4, await userData());