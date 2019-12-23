import { defaultState } from '../../server/defaultState'
import { UPDATE_TASK_GROUP } from '../actions/tasks-actions'

export default function tasksReducer (state = defaultState.tasks, action) {
  switch (action.type) {
    case UPDATE_TASK_GROUP:
    default:
      return state
  }
}
