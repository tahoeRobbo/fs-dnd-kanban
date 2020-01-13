import { generateId } from '../../utils/helpers'
import mongoose from 'mongoose'

export function formatNewTask (req, res, next) {
  req.body = {
    name: req.body.name,
    id: generateId(),
    group: mongoose.Types.ObjectId(),
    owner: mongoose.Types.ObjectId(), // todo update once auth implemented,
    created: Date.now(),
    isComplete: false
  }

  next()
}

export function addCompletedTime (req, res, next) {
  const { isComplete } = req.body

  if (isComplete === true) {
    req.body.completed = Date.now()
  } else {
    req.body.completed = null
  }

  next()
}
