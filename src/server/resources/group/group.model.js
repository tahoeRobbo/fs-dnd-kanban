import mongoose from 'mongoose'

const groupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    }
  }
)

export const Group = mongoose.model('group', groupSchema)
