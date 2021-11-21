const express = require('express')
const router = express.Router()
const { joiSchema, updateFavoriteJoiSchema } = require('../../models/contact')
const { controllerWrapper, validation, authenticate } = require('../../middlewares')
const ctrl = require('../../controllers/contacts')

router.get('/', controllerWrapper(ctrl.listAllContacts))

router.get('/:contactId', controllerWrapper(ctrl.getOneContactById))

router.post('/', authenticate, validation(joiSchema), controllerWrapper(ctrl.addOneContact))

router.put('/:contactId', authenticate, validation(joiSchema), controllerWrapper(ctrl.updateContactsById))

router.patch('/:contactId/favorite', authenticate, validation(updateFavoriteJoiSchema), controllerWrapper(ctrl.updateStatusContact))

router.delete('/:contactId', authenticate, controllerWrapper(ctrl.removeContactById))

module.exports = router
