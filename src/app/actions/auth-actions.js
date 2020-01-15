import { signin } from '../utils/api'

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export function handleLogin (credentials) {
  return (dispatch) => {
    signin(credentials)
      .then((res) => res.json())
      .then(({ user, token }) => {
        window.localStorage.setItem('token', token)
        dispatch(login(user))
      })
      .catch(err => {
        window.localStorage.removeItem('token')
        console.error(err)
        dispatch(logout())
      })
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
