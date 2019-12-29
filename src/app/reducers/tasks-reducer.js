import { ADD_TASK, UPDATE_TASK_GROUP } from '../actions/tasks-actions'
import { SET_INITIAL_DATA } from '../actions/shared'

export default function tasksReducer (state = [], action) {
  switch (action.type) {
    case SET_INITIAL_DATA:
      return action.data.tasks
    case ADD_TASK:
      return state.concat([action.task])
    case UPDATE_TASK_GROUP:
      return state.map((task) => {
        return task.id !== action.taskId
          ? task
          : Object.assign({}, task, {group: action.groupId})
      })
    default:
      return state
  }
}
