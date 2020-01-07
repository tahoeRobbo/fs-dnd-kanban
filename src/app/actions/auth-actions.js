import { getAuth } from '../utils/api'

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export function handleLogin (credentials) {
  return (dispatch) => {
    getAuth(credentials)
      .then((res) => res.json())
      .then((user) => {
        if (user.authed) {
          dispatch(login(user))
          return 'returned from handleLogin'
        }
        return dispatch(logout())
      })
      .catch(err => new Error(`fucked up in handleLogin, ${err}`))
  }
}

function login (user) {
  return {
    type: LOGIN,
    user
  }
}

function logout () {
  return {
    type: LOGOUT
  }
}
