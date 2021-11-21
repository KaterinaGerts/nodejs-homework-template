const { Conflict } = require('http-errors')
const { sendSuccessRes } = require('../../helpers')
const gravatar = require('gravatar')
const { User } = require('../../models')

const signUp = async(req, res, next) => {
  try {
    const { email, password } = req.body
    const defaultAvatar = gravatar.url(email, { protocol: 'https', s: '250' }, true)

    const user = await User.findOne({ email })
    if (user) {
      throw new Conflict(`Email ${email} in use`)
    }

    const newUser = new User({ email, avatarURL: defaultAvatar })
    newUser.setPassword(password)
    await newUser.save()

    sendSuccessRes(res, { user: newUser, message: 'Success signup' }, 201)
  } catch (error) {
    next(error)
  }
}

module.exports = signUp
