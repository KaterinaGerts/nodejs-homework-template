const { NotFound } = require('http-errors')
const { sendSuccessRes } = require('../../helpers')
const { getContactById } = require('../../model/contacts')

const getOneContactById = async (req, res) => {
  const { contactId } = req.params
  const result = await getContactById(contactId)
  if (!result) {
    throw new NotFound(`Contact with id=${contactId} not found`)
  }
  sendSuccessRes(res, { result })
}

module.exports = getOneContactById
