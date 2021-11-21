const { Contact } = require('../../models')
const { sendSuccessRes } = require('../../helpers')

const getAllByCurrentUser = async (req, res) => {
  const { _id } = req.user
  const result = await Contact.find({ owner: _id })
  sendSuccessRes(res, { result, message: 'Success' }, 200)
}

module.exports = getAllByCurrentUser
