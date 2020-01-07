import { LOGIN, LOGOUT } from '../actions/auth-actions'

export default function usersReducer (state = {}, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...action.user
      }
    case LOGOUT:
      return {}
    default:
      return state
  }
}
