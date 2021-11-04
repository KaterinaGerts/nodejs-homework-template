const { NotFound } = require('http-errors')
const { sendSuccessRes } = require('../../helpers')
const { removeContact } = require('../../model/contacts')

const removeContactById = async (req, res) => {
  const { contactId } = req.params
  const result = await removeContact(contactId)
  if (!result) {
    throw new NotFound(`Contact with id=${contactId} not found`)
  }
  sendSuccessRes(res, { message: 'success delete' })
}

module.exports = removeContactById
