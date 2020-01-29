import { SET_INITIAL_DATA } from '../actions/shared'
import { SET_GROUPS } from '../actions/groups-actions'

const defaultGroups = [
  {
    name: 'To Do',
    id: 1
  },
  {
    name: 'Doing',
    id: 2
  },
  {
    name: 'Done',
    id: 3
  }
]

export default function groupsReducer (state = defaultGroups, action) {
  switch (action.type) {
    case SET_GROUPS:
      return state.concat(action.groups)
    case SET_INITIAL_DATA:
      return state.concat(action.data.groups)
    default:
      return state
  }
}
