const { Conflict } = require('http-errors')
const { sendSuccessRes } = require('../../helpers')
const { User } = require('../../models')

const signUp = async(req, res, next) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (user) {
      throw new Conflict(`Email ${email} in use`)
    }

    const newUser = new User({ email })
    newUser.setPassword(password)
    await newUser.save()

    sendSuccessRes(res, { user: newUser, message: 'Success' }, 201)
  } catch (error) {
    next(error)
  }
}

module.exports = signUp
