import { LOGIN, LOGOUT } from '../actions/auth-actions'

export default function usersReducer (state = {}, action) {
  switch (action.type) {
    case LOGIN:
      // weird collision on action.token with morgan so destructuring here
      // eslint-disable-next-line no-case-declarations
      const { token } = action
      return {
        token
      }
    case LOGOUT:
      return {}
    default:
      return state
  }
}
