import { signin } from '../utils/api'
import { removeLocalStorage, saveLocalStorage } from '../utils/localStorage'

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export function handleLogin (credentials) {
  return (dispatch) => {
    signin(credentials)
      .then((res) => res.json())
      .then(({ token }) => {
        saveLocalStorage('user', { token })
        dispatch(login(token))
      })
      .catch(err => {
        console.error(err)
        dispatch(logout())
      })
  }
}

function login (token) {
  return {
    type: LOGIN,
    token
  }
}

export function logout () {
  removeLocalStorage('user')
  return {
    type: LOGOUT
  }
}
