const { Schema, model } = require('mongoose')
const Joi = require('joi')

const emailRegExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/

const contactSchema = Schema({

  name: {
    type: String,
    required: [true, 'Set name for contact'],
    minlength: 2,
  },
  email: {
    type: String,
    unique: true,
    match: emailRegExp,
    minlength: 9,
  },
  phone: {
    type: String,
    unique: true,
    match: phoneRegExp,
    minlength: 11,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  }

}, { versionKey: false, timestamps: true })

const joiSchema = Joi.object({
  name: Joi.string().min(1).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean()
})

const updateFavoriteJoiSchema = Joi.object({
  favorite: Joi.boolean().required()
})

const Contact = model('contact', contactSchema)

module.exports = {
  joiSchema,
  Contact,
  updateFavoriteJoiSchema
}
