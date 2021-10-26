/* eslint-disable no-useless-catch */
const { v4: uuidv4 } = require('uuid')
const fs = require('fs/promises')
const contactsPath = require('./contactPath')
const listContacts = require('./listContacts')

const addContact = async (name, email, phone) => {
  const contacts = await listContacts()
  const newContact = {
    id: uuidv4(),
    name,
    email,
    phone,
  }
  contacts.push(newContact)
  try {
    const contactsString = JSON.stringify(contacts)
    await fs.writeFile(contactsPath, contactsString)
    // console.table(newContact);
    return newContact
  } catch (error) {
    throw error
  }
}

module.exports = addContact
