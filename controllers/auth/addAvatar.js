const fs = require('fs/promises')
const path = require('path')
const { User } = require('../../models/user')
const { sendSuccessRes } = require('../../helpers')
const Jimp = require('jimp')
const extentionList = require('./extentionList')
const { BadRequest } = require('http-errors')

const avatarsDir = path.join(__dirname, '../../', 'public/avatars')

const addAvatar = async (req, res) => {
  const { _id } = req.user
  const { path: tempPath, originalname } = req.file
  try {
    const [extention] = originalname.split('.').reverse()
    if (!extentionList.includes(extention)) {
      throw new BadRequest('extension is not allowed')
    }
    const uploadPath = path.join(avatarsDir, originalname)

    const file = await Jimp.read(tempPath)
    await file.resize(255, 255).write(tempPath)
    await fs.rename(tempPath, uploadPath)
    const avatarUrl = `/avatars/${_id}/${originalname}`
    await User.findByIdAndUpdate(_id, { avatarUrl })
    sendSuccessRes(res, {
      user: { _id, avatarUrl },
      message: 'Success'
    },
    200)
  } catch (error) {
    await fs.unlink(tempPath)
    throw error
  }
}

module.exports = addAvatar
