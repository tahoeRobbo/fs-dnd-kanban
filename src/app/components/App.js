import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

import Dashboard from './Dashboard'
import Login from './Login'
import SignUp from './SignUp'
import Nav from './Nav'

function App () {
  return (
    <Router>
        <div className='min-h-full'>
          <div className='px-24 py-10'>
            <Nav />
            <PrivateRoute path='/dashboard' exact component={Dashboard} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={SignUp} />
          </div>
        </div>
    </Router>
  )
}

export default App
