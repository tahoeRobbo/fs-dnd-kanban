import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../store'

import Dashboard from './Dashboard'
import Login from './Login'

function App () {
  return (
    <Router>
      <Provider store={store}>
        <div className='min-h-full'>
          <div className='px-24 py-10'>
            <Route path='/' exact component={Dashboard} />
            <Route path='/login' component={Login} />
          </div>
        </div>
      </Provider>
    </Router>
  )
}

export default App
