import { createStore } from 'redux'
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from './reducers/index'

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;