const express = require('express')
const joiSchema = require('../../models/user')
const { controllerWrapper, validation, authenticate } = require('../../middlewares')
const ctrl = require('../../controllers/auth')

const router = express.Router()

router.post('/signup', validation(joiSchema), controllerWrapper(ctrl.signUp))

router.post('/login', validation(joiSchema), controllerWrapper(ctrl.logIn))

router.get('/logout', authenticate, controllerWrapper(ctrl.logOut))

module.exports = router
