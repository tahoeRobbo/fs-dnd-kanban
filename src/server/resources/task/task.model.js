import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  group: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'group',
    required: true
  },
  owner: {
    type: mongoose.SchemaType.ObjectId,
    ref: 'user',
    required: true
  },
  created: {
    type: Date,
    default: Date.now,
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
})

export const Task = mongoose.model('task', taskSchema)
