/* eslint-disable no-useless-catch */
const listContacts = require('./listContacts')

const getContactById = async (contactId) => {
  try {
    const contacts = await listContacts()
    const selectedContact = contacts.find(contact => String(contact.id) === contactId)
    if (!selectedContact) {
      throw new Error(`Product with id=${contactId} not found!`)
    }
    // console.table(selectedContact);
    return selectedContact
  } catch (error) {
    throw error
  }
}

module.exports = getContactById
