import { generateId } from '../../utils/helpers'

export function formatNewTask (req, res, next) {
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
