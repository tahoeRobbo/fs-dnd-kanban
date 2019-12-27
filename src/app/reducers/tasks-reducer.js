import { defaultState } from '../../server/defaultState'
import { UPDATE_TASK_GROUP } from '../actions/tasks-actions'
import { GET_INITIAL_DATA } from '../actions/shared'

export default function tasksReducer (state = [], action) {
  switch (action.type) {
    case GET_INITIAL_DATA:
      return action.defaultState.tasks
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
