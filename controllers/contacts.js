const { NotFound } = require('http-errors')
const { sendSuccessRes } = require('../helpers')
const { listContacts, getContactById, addContact, removeContact, updateContacts } = require('../model/contacts')

const listAllContacts = async (req, res) => {
  const result = await listContacts()
  sendSuccessRes(res, { result })
}

const getOneContactById = async (req, res) => {
  const { contactId } = req.params
  const result = await getContactById(contactId)
  if (!result) {
    throw new NotFound(`Contact with id=${contactId} not found`)
  }
  sendSuccessRes(res, { result })
}

const addOneContact = async (req, res) => {
  const result = await addContact(req.body)
  sendSuccessRes(res, { result }, 201)
}

const updateContactsById = async (req, res) => {
  const { contactId } = req.params
  const result = await updateContacts(contactId, req.body)
  if (!result) {
    throw new NotFound(`Contact with id=${contactId} not found`)
  }
  sendSuccessRes(res, { result })
}

const removeContactById = async (req, res) => {
  const { contactId } = req.params
  const result = await removeContact(contactId)
  if (!result) {
    throw new NotFound(`Contact with id=${contactId} not found`)
  }
  sendSuccessRes(res, { message: 'success delete' })
}

module.exports = {
  listAllContacts,
  getOneContactById,
  addOneContact,
  updateContactsById,
  removeContactById
}
