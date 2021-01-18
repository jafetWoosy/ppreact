import {  initialState   } from './initialState';
import { initialStateColor } from './initialStateColor';
import {  initialCart   } from './initialCart';
import {     initialExtas  } from './initialExtras';


import * as t from './actionTypes';


export const loginReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case t.SET_LOGIN_STATE:
            return { ...state, isLoggedIn: true  }
        case t.SET_LOGIN_INVITED: 
              console.log('INGRESASTE COMO INVITADO');
         return {...state, invited: true }
        default:
            return state;
    }
}




export const colorsTabsReducer = (  state = initialStateColor, action ) => { 
      switch (action.type) {
          case t.SCREEN_HOME:
              return { ...state,  HOME: "#000", STATUS: "#D8D9DB", STORE: "#D8D9DB", PROFILE: "#D8D9DB", opacitytab: 20, modalvisible: false   }
          case t.SCREEN_STATUS:
              return {...state, HOME: "#D8D9DB", STATUS: "#000",  STORE: "#D8D9DB", PROFILE: "#D8D9DB", opacitytab: 20, modalvisible: false   }
          case t.SCREEN_STORE:
              return {...state, HOME: "#D8D9DB", STATUS: "#D8D9DB",  STORE: "#000", PROFILE: "#D8D9DB", opacitytab: 20, modalvisible: false   }
          case t.SCREEN_PROFILE:
              return {...state, HOME: "#D8D9DB", STATUS: "#D8D9DB",  STORE: "#D8D9DB", PROFILE: "#000", opacitytab: 20, modalvisible: false   }
          case t.TABVISIBLE:
                  
                return {...state, opacitytab: -2  }     
          case t.MODALVISIBLE:
                  return {...state, modalvisible: true  }
          
           case t.MODALFALSE:
                    return {...state, modalvisible: false  }                         
          default:
              return state;
              
      }
}



export const cartProductReducer = (state = initialCart , action) => {  
     switch (action.type) {
         case t.ADDPRODUCT: 
             return {  ...state, productos: state.productos.concat(action.value), PAGOTOTAL: state.PAGOTOTAL += action.value.costo   }
        case t.SUMQUANTITY:
            return { ...state, productos: action.value, PAGOTOTAL: state.PAGOTOTAL += action.total   }
        case t.ADDEXTRA:
            return {   ...state, extras: state.extras.concat(action.value.ingredientesFormat) }   
        case t.ADDADDRESS:
            console.log(action);
            return { ...state, DIRECCION: action.value.direccion  }   
         default:
             return state;
     } 
}


// export const extrasTemReducer = (state = initialExtas , action) => {
//     switch(action.type) {
//         case t.SUMQUANTITY:
//           return {     }
//          default: 
//          return state;
            
//     }
// }


