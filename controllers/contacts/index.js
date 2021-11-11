const listAllContacts = require('./listAllContacts')
const getOneContactById = require('./getOneContactById')
const addOneContact = require('./addOneContact')
const updateContactsById = require('./updateContactsById')
const removeContactById = require('./removeContactById')
const updateStatusContact = require('./updateStatusContact')

module.exports = {
  listAllContacts,
  getOneContactById,
  addOneContact,
  updateContactsById,
  removeContactById,
  updateStatusContact
}