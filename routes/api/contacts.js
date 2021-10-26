const express = require('express')
const router = express.Router()
const { contactsSchema } = require('../../schemas')
const { controllerWrapper, validation } = require('../../middlewares')
const { contacts: ctrl } = require('../../controllers')

router.get('/', controllerWrapper(ctrl.listAllContacts))

router.get('/:contactId', controllerWrapper(ctrl.getOneContactById))

router.post('/', validation(contactsSchema), controllerWrapper(ctrl.addOneContact))

router.patch('/:contactId', validation(contactsSchema), controllerWrapper(ctrl.updateContactsById))

router.delete('/:contactId', controllerWrapper(ctrl.removeContactById))

module.exports = router
