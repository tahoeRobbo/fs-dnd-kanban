export default function usersReducer (state = [], action) {
  switch (action.type) {
    case GET_INITIAL_DATA:
      return action.defaultState.users
    default:
      return state
  }
}
import { defaultState } from '../../server/defaultState'

import { GET_INITIAL_DATA } from '../actions/shared'
