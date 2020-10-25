import {  initialState   } from './initialState';
import { initialStateColor } from './initialStateColor';
import * as t from './actionTypes';


export const loginReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case t.SET_LOGIN_STATE:
            return { ...state, isLoggedIn: true  }
        case t.SET_LOGIN_INVITED: 
         return {...state, invited: true }
        default:
            return state;
    }
}



export const colorsTabsReducer = (  state = initialStateColor, action ) => {
      switch (action.type) {
          case t.SCREEN_HOME:
              return { ...state,  HOME: "#000"  }
          default:
              return state;
              
      }
}