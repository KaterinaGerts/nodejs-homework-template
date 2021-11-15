const express = require('express')

const joiUserSchema = require('../../models/user')
const { validation } = require('../../middlewares')
const ctrl = require('../../controllers/auth')

const router = express.Router()

router.post('/signup', validation(joiUserSchema), ctrl.signUp)

// router.post('/login', ctrl.login)

// router.get('/logout', ctrl.logout)

module.exports = router
