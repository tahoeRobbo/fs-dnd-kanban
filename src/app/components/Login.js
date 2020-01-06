import React from 'react'
import { useDispatch} from 'react-redux'
import { handleLogin } from '../actions/auth-actions'

function Login () {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const dispatch = useDispatch()

  function handleSubmit (e) {
    e.preventDefault()
    console.log('e', e.target)
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
