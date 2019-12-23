import { combineReducers } from 'redux'

import comments from './comments-reducer'
import groups from './groups-reducer'
import tasks from './tasks-reducer'
import users from './users-reducer'

export default combineReducers({
  comments,
  groups,
  tasks,
  users
})
