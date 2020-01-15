import { SET_INITIAL_DATA } from '../actions/shared'
import { SET_GROUPS } from '../actions/groups-actions'

export default function groupsReducer (state = [], action) {
  switch (action.type) {
    case SET_GROUPS:
      return action.groups
    case SET_INITIAL_DATA:
      return action.data.groups
    default:
      return state
  }
}
