import { generateId } from '../../utils/helpers'
import mongoose from 'mongoose'

export function formatNewTask (req, res, next) {
  console.log('req.user inside formatNewTask', req.user)
  req.body = {
    name: req.body.name,
    id: generateId(),
    group: 'To Do',
    owner: req.user._id,
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
