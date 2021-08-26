const mongoose = require('mongoose')
const commentSchema = require('./comment')

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    hashedPassword: {
      type: String,
      required: true
    },
    comments: [commentSchema],
    token: String
  },
  {
    timestamps: true,
    toObject: {
      // remove `hashedPassword` field when we call `.toObject`
      transform: (_doc, user) => {
        delete user.hashedPassword
        return user
      }
    }
  }
)

module.exports = mongoose.model('User', userSchema)
