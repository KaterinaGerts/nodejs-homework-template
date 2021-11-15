const { User } = require('../../models')

const signUp = async(req, res, next) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (user) {
      return res.status(409).json({
        status: 'Conflict',
        code: 409,
        message: 'Email in use'
      })
    }
    await User.create({ email, password })
    res.status(201).json({
      status: 'Created',
      code: 201,
      user: {
        email,
        subscription: 'starter'
      }
    })
  } catch (error) {
    next(error)
  }
}

module.exports = signUp
