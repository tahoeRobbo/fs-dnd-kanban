import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import { loadLocalStorage, saveLocalStorage } from './utils/localStorage'

import App from './components/App'

import './index.css'

const persistedState = loadLocalStorage()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
