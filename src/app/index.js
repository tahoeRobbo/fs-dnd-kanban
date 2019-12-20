import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store'

import Dashboard from './components/Dashboard'

console.log('store.getState()', store.getState())
function App () {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
