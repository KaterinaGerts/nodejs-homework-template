const { sendSuccessRes } = require('../../helpers')
const { listContacts } = require('../../model/contacts')

const listAllContacts = async (req, res) => {
  const result = await listContacts()
  sendSuccessRes(res, { result })
}

module.exports = listAllContacts
