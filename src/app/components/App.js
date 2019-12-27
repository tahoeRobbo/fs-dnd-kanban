import React from 'react'
import { Provider, useDispatch } from 'react-redux'
import { store } from '../store'

import { getInitialData } from '../actions/shared'

import Dashboard from './Dashboard'

function App () {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(getInitialData())
  }, [])

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
