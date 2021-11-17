const { User } = require('../../models')
const { sendSuccessRes } = require('../../helpers')
const { NotFound } = require('http-errors')

const logIn = async(req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (!user || !user.comparePassword(password)) {
    throw new NotFound('Invalid email or password')
  }

  const { _id } = user
  const token = user.createToken()

  const newUser = await User.findByIdAndUpdate(_id, { token })
  sendSuccessRes(res, { user: newUser, message: 'Success login' }, 200)
}

module.exports = logIn
