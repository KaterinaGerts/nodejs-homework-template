const express = require('express')

const joiUserSchema = require('../../models/user')
const validation = require('../../middlewares/validation')
const { auth: ctrl } = require('../../controllers')

const router = express.Router()

const userValidationMiddleware = validation(joiUserSchema)

router.post('/signup', userValidationMiddleware, ctrl.signUp)

// router.post('/login', ctrl.login)

// router.get('/logout', ctrl.logout)

module.exports = router
