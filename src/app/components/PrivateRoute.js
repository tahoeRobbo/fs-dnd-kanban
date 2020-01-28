import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import useLoggedIn from '../hooks/useLoggedIn'

function PrivateRoute ({ component: Component, ...rest }) {
  const loggedIn = useLoggedIn()
  return (
    <Route {...rest} render={props => (
      loggedIn
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )
}

export default PrivateRoute
