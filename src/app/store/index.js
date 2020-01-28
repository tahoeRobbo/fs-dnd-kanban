import { createStore } from 'redux'
import { loadLocalStorage } from '../utils/localStorage'

import rootReducer from '../reducers'
import middleware from '../middleware'

const persistedState = {
  users: loadLocalStorage('user')
}

export const store = createStore(
  rootReducer,
  persistedState,
  middleware
)
