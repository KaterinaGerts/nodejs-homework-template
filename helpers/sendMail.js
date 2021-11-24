const nodemailer = require('nodemailer')

const { ENV_PASSWORD } = process.env

const nodemailerConfig = {
  host: 'smtp.mail.ru',
  port: 465,
  secure: true,
  auth: {
    user: 'katyushka.84@mail.ru',
    pass: ENV_PASSWORD
  }
}

const transporter = nodemailer.createTransport(nodemailerConfig)

const sendMail = async(data) => {
  try {
    const email = { ...data, from: 'katyushka.84@mail.ru' }
    await transporter.sendMail(email)
  } catch (error) {
    return false
  }
}

module.exports = sendMail
