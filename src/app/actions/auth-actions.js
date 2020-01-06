export const LOGIN = 'LOGIN'

export function handleLogin ({ username, password }) {
  return {
    type: LOGIN
  }
}
