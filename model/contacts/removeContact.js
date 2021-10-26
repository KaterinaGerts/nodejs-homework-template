/* eslint-disable no-useless-catch */
const fs = require('fs/promises')
const contactsPath = require('./contactPath')
const listContacts = require('./listContacts')

const removeContact = async contactId => {
  try {
    const contacts = await listContacts()
    const idx = contacts.findIndex(contact => contact.id === Number(contactId))
    if (idx === -1) {
      return null
    }
    const newContacts = contacts.filter(
      contact => contact.id !== Number(contactId),
    )
    const contactsString = JSON.stringify(newContacts)
    await fs.writeFile(contactsPath, contactsString)
    console.table(newContacts)
    return 'Success remove!'
  } catch (error) {
    throw error
  }
}

module.exports = removeContact
