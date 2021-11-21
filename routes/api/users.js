const express = require('express')
const { joiUserSchema } = require('../../models/user')
const { controllerWrapper, validation, authenticate } = require('../../middlewares')
const ctrl = require('../../controllers/auth')

const router = express.Router()

router.post('/signup', validation(joiUserSchema), controllerWrapper(ctrl.signUp))

router.post('/login', validation(joiUserSchema), controllerWrapper(ctrl.logIn))

router.get('/logout', authenticate, controllerWrapper(ctrl.logOut))

router.get('/current', authenticate, controllerWrapper(ctrl.getAllByCurrentUser))

module.exports = router
