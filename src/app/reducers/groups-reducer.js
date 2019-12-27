import { defaultState } from '../../server/defaultState'
import { GET_INITIAL_DATA } from '../actions/shared'

export default function groupsReducer (state = [], action) {
  switch (action.type) {
    case GET_INITIAL_DATA:
      return action.defaultState.groups
    default:
      return state
  }
}
