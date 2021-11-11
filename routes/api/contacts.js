const express = require('express')
const router = express.Router()
const { joiSchema, updateFavoriteJoiSchema } = require('../../models/contact')
const { controllerWrapper, validation } = require('../../middlewares')
const ctrl = require('../../controllers/contacts')

router.get('/', controllerWrapper(ctrl.listAllContacts))

router.get('/:contactId', controllerWrapper(ctrl.getOneContactById))

router.post('/', validation(joiSchema), controllerWrapper(ctrl.addOneContact))

router.put('/:contactId', validation(joiSchema), controllerWrapper(ctrl.updateContactsById))

router.patch('/:contactId/favorite', validation(updateFavoriteJoiSchema), controllerWrapper(ctrl.updateStatusContact))

router.delete('/:contactId', controllerWrapper(ctrl.removeContactById))

module.exports = router
