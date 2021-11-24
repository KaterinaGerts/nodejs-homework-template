const { Schema, model } = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Joi = require('joi')
require('dotenv').config()

const emailRegExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/

const userSchema = Schema({

  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 6,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: emailRegExp,
    minlength: 9,
  },
  subscription: {
    type: String,
    enum: ['starter', 'pro', 'business'],
    default: 'starter'
  },
  token: {
    type: String,
    default: null,
  },
  avatarURL: {
    type: String,
    default: '',
  },
  verify: {
    type: Boolean,
    default: false,
  },
  verifyToken: {
    type: String,
    required: [true, 'Verify token is required'],
  },

}, { versionKey: false, timestamps: true })

userSchema.methods.setPassword = function(password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

userSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

const { SECRET_KEY } = process.env

userSchema.methods.createToken = function() {
  const payload = {
    _id: this._id
  }
  return jwt.sign(payload, SECRET_KEY)
}

const joiUserSchema = Joi.object({
  email: Joi.string().pattern(emailRegExp).required(),
  password: Joi.string().min(6).required(),
  subscription: Joi.string().valid('starter', 'pro', 'business'),
  avatarURL: Joi.string()
})

const User = model('user', userSchema)

module.exports = {
  joiUserSchema,
  User
}
