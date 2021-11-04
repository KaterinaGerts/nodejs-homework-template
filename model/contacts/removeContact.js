const fs = require('fs/promises')
const contactsPath = require('./contactPath')
const listContacts = require('./listContacts')

const removeContact = async contactId => {
  const contacts = await listContacts()
  const idx = contacts.findIndex(contact => contact.id === contactId)
  if (idx === -1) {
    return null
  }
  const newContacts = contacts.filter(
    contact => contact.id !== contactId,
  )
  const contactsString = JSON.stringify(newContacts)
  await fs.writeFile(contactsPath, contactsString)
  console.table(newContacts)
  return 'Success remove!'
}

module.exports = removeContact
