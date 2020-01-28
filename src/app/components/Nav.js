import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { LOGOUT } from '../actions/auth-actions'
import { logout } from '../actions/auth-actions'

import useLoggedIn from '../hooks/useLoggedIn'

function Nav () {
  const loggedIn = useLoggedIn()
  const dispatch = useDispatch()

  const itemStyles = ['w-1/12', 'text-right'].join(' ')

  return (
    <nav className='' >
      <ul className='flex flex-row-reverse'>
        {!loggedIn
        ? [<li className={itemStyles} key='login'>
            <NavLink
              to='/login'
              exact
            >
              Login
            </NavLink>
          </li>,
          <li className={itemStyles} key='signup'>
            <NavLink
              to='/signup'
              exact
            >
            Sign Up
            </NavLink>
          </li>]
        : <li className={itemStyles} key='logout' onClick={() => dispatch(logout())}>
            <NavLink
              to='/login'
              exact
            >
            Logout
            </NavLink>
          </li>

        }
      </ul>
    </nav>
  )
}

export default Nav
