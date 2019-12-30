import { ADD_TASK, UPDATE_TASK } from '../actions/tasks-actions'
import { SET_INITIAL_DATA } from '../actions/shared'

export default function tasksReducer (state = [], action) {
  switch (action.type) {
    case SET_INITIAL_DATA:
      return action.data.tasks
    case ADD_TASK:
      return state.concat([action.task])

    case UPDATE_TASK:
      let keys = Object.keys(action.task)
      return state.map((task) => {
        if (task.id !== action.task.id) {
          return task
        }
        let updates = {}
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
