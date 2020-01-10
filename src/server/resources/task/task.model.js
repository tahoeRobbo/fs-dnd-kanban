import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  id: {
    type: Number,
    required: true
  },
  group: {
    type: String,
    required: true,
    trim: true
  },
  owner: {
    type: mongoose.SchemaType.ObjectId,
    required: true,
    ref: 'user'
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
