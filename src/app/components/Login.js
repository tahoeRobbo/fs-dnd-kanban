import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { handleLogin } from '../actions/auth-actions'
import useLoggedIn from '../hooks/useLoggedIn'

function Login () {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const loggedIn = useLoggedIn()
  const history = useHistory()
  const dispatch = useDispatch()
  const user = useSelector(state => state.users)

  React.useEffect(() => {
    if (loggedIn) {
      history.push('/dashboard')
    }
  }, [loggedIn] )

  function handleSubmit (e) {
    e.preventDefault()
    dispatch(handleLogin({
      username,
      password
    }))
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={username}
          name='login'
          placeholder='username'
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='password'
          value={password}
          name='password'
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Login</button>
      </form>
    </>
  )
}

export default Login
