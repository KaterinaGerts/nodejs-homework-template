const { NotFound } = require('http-errors')
const { sendSuccessRes } = require('../../helpers')
const { Contact } = require('../../models/contact')

const getOneContactById = async (req, res) => {
  const { contactId } = req.params
  const result = await Contact.findById(contactId)
  if (!result) {
    throw new NotFound(`Contact with id=${contactId} not found`)
  }
  sendSuccessRes(res, { result })
}

module.exports = getOneContactById
