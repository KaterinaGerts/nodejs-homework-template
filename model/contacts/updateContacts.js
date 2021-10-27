const fs = require('fs/promises')
const contactsPath = require('./contactPath')
const listContacts = require('./listContacts')

const updateContacts = async (contactId, data) => {
  const contacts = await listContacts()
  const idx = contacts.findIndex(contact => contact.id === contactId)
  if (idx === -1) {
    return null
  }
  const updateContact = { ...contacts[idx], ...data }
  contacts[idx] = updateContact

  const contactsString = JSON.stringify(contacts)
  await fs.writeFile(contactsPath, contactsString)
  return updateContact
}

module.exports = updateContacts
