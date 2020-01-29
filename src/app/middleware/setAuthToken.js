import { LOGIN, LOGOUT } from '../actions/auth-actions'
import { setToken } from '../utils/api'

const setAuthToken = (store) => (next) => (action) => {
  if (action.type === LOGIN) {
    setToken(action.token)
    console.log(`setting auth token ${action.token}`)
  } else if (action.type === LOGOUT) {
    setToken(null)
  }
  return next(action)
}

export default setAuthToken
