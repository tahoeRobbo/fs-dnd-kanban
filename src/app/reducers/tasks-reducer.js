import { ADD_TASK, UPDATE_TASK } from '../actions/tasks-actions'
import { SET_INITIAL_DATA } from '../actions/shared'
let keys

export default function tasksReducer (state = [], action) {
  switch (action.type) {
    case SET_INITIAL_DATA:
      return action.data.tasks
    case ADD_TASK:
      return state.concat([action.task])

    case UPDATE_TASK:
      keys = Object.keys(action.task)
      return state.map((task) => {
        if (task._id !== action.task._id) {
          return task
        }
        const updates = {}
        keys.forEach((key) => {
          updates[key] = action.task[key]
        })
        return {
          ...task,
          ...updates
        }
      })
    default:
      return state
  }
}
