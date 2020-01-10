import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      maxLength: 20,
      trim: true
    },
    password: {
      type: String,
      required: true,
      trim: true
    }
  }
)

export const User = mongoose.model('user', userSchema)
