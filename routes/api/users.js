const express = require('express')
const { joiUserSchema } = require('../../models/user')
const { controllerWrapper, validation, authenticate, upload } = require('../../middlewares')
const ctrl = require('../../controllers/auth')

const router = express.Router()

router.post('/signup', validation(joiUserSchema), controllerWrapper(ctrl.signUp))

router.get('/verify/:verifyToken', controllerWrapper(ctrl.verify))

router.post('/login', validation(joiUserSchema), controllerWrapper(ctrl.logIn))

router.get('/logout', authenticate, controllerWrapper(ctrl.logOut))

router.get('/current', authenticate, controllerWrapper(ctrl.getAllByCurrentUser))

router.patch('/avatars', authenticate, upload.single('avatar'), controllerWrapper(ctrl.addAvatar))

module.exports = router
