/* eslint-disable no-useless-catch */
const fs = require('fs/promises')
const contactsPath = require('./contactPath')
const listContacts = require('./listContacts')

const updateContacts = async (contactId, data) => {
  const contacts = await listContacts()
  const idx = contacts.findIndex(contact => contact.id === Number(contactId))
  if (idx === -1) {
    return null
  }
  const updateContact = { ...contacts[idx], ...data }
  contacts[idx] = updateContact
  try {
    const contactsString = JSON.stringify(contacts)
    await fs.writeFile(contactsPath, contactsString)
    return updateContact
  } catch (error) {
    throw error
  }
}

module.exports = updateContacts
