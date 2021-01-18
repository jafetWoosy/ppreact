import  thunkMiddleware  from 'redux-thunk';
import {  createStore, combineReducers, applyMiddleware  } from 'redux';
import {  loginReducer } from './reducer';
import { colorsTabsReducer } from './reducer';
import {   cartProductReducer  } from './reducer';

const rootReducer = combineReducers({
    loginReducer,
    colorsTabsReducer,
    cartProductReducer,

});


export const store = createStore(
    rootReducer,
)