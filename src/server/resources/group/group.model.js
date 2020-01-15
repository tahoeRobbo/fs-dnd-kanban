import mongoose from 'mongoose'
import config from '../../config'

const groupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      enum: config.groupNames
    }
  }
)

export const Group = mongoose.model('group', groupSchema)
