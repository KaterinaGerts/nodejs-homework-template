const { NotFound } = require('http-errors')
const { sendSuccessRes } = require('../../helpers')
const { updateContacts } = require('../../model/contacts')

const updateContactsById = async (req, res) => {
  const { contactId } = req.params
  const result = await updateContacts(contactId, req.body)
  if (!result) {
    throw new NotFound(`Contact with id=${contactId} not found`)
  }
  sendSuccessRes(res, { result })
}

module.exports = updateContactsById
