import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'

import { loadState } from '../utils/local-storage'
import reducers from '../reducers'

const persistedState = loadState()
let middleware = composeWithDevTools(applyMiddleware(promise, thunk, logger))

export default createStore(reducers, persistedState, middleware)