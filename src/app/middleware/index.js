import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from './logger'
import setAuthToken from './setAuthToken'

export default applyMiddleware(thunk, logger, setAuthToken)
