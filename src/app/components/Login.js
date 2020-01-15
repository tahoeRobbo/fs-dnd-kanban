import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { handleLogin } from '../actions/auth-actions'

function Login () {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const history = useHistory()
  const dispatch = useDispatch()
  const user = useSelector(state => state.users)

  React.useEffect(() => {
    if (user._id) {
      history.push('/')
    }
  }, [user])

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
