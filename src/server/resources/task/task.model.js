import mongoose from 'mongoose'
import config from '../../config'

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  group: {
    type: String,
    required: true,
    enum: config.groupNames,
    default: 'To Do'
  },
  owner: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'user',
    required: true
  },
  isComplete: {
    type: Boolean,
    required: true,
    default: false
  },
  completed: {
    type: Date,
    required: false
  }
},
{ timestamps: true }
)

export const Task = mongoose.model('task', taskSchema)
