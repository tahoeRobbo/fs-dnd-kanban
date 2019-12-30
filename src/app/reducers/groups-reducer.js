import { SET_INITIAL_DATA } from '../actions/shared'

export default function groupsReducer (state = [], action) {
  switch (action.type) {
    case SET_INITIAL_DATA:
      return action.data.groups
    default:
      return state
  }
}
