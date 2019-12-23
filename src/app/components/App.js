import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../store'

import Dashboard from './Dashboard'

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

export default App
