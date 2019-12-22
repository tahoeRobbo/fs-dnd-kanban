import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store'

import Dashboard from './components/Dashboard'

import './index.css'

console.log('store.getState()', store.getState())
function App () {
  return (
    <Provider store={store}>
      <div className='min-h-full'>
        <div className='px-24 py-10'>
          <Dashboard />
        </div>
      </div>
    </Provider>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
