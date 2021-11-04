const { sendSuccessRes } = require('../../helpers')
const { addContact } = require('../../model/contacts')

const addOneContact = async (req, res) => {
  const result = await addContact(req.body)
  sendSuccessRes(res, { result }, 201)
}

module.exports = addOneContact
