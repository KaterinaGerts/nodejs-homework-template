const { User } = require('../../models')
const { sendSuccessRes } = require('../../helpers')

const logOut = async (req, res) => {
  const { _id } = req.user
  await User.findByIdAndUpdate(_id, { token: null })
  sendSuccessRes(res, { message: 'Success logout' }, 204)
}

module.exports = logOut
