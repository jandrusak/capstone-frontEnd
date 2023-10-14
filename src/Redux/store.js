import { legacy_createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import state from './state'
import thunk from 'redux-thunk'

const store = legacy_createStore(reducers, state, applyMiddleware(thunk))
  
export default store;