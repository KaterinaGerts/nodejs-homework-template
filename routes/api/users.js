const express = require('express')

const joiUserSchema = require('../../models/user')
const { controllerWrapper, validation } = require('../../middlewares')
const ctrl = require('../../controllers/auth')

const router = express.Router()

router.post('/signup', validation(joiUserSchema), controllerWrapper(ctrl.signUp))

router.post('/login', validation(joiUserSchema), controllerWrapper(ctrl.logIn))

router.get('/logout', validation(joiUserSchema), controllerWrapper(ctrl.logOut))

module.exports = router
