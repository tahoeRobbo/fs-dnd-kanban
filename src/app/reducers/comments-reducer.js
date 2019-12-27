import { defaultState } from '../../server/defaultState'
import { GET_INITIAL_DATA } from '../actions/shared'

export default function commentsReducer (state = [], action) {
  switch (action.type) {
    case GET_INITIAL_DATA:
      return action.defaultState.comments
    default:
      return state
  }
}
