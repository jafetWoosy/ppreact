import  thunkMiddleware  from 'redux-thunk';
import {  createStore, combineReducers, applyMiddleware  } from 'redux';
import {  loginReducer } from './reducer';

const rootReducer = combineReducers({
    loginReducer: loginReducer
})


export const store = createStore(
    rootReducer,
)