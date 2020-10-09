import * as t from './actionTypes';


const setLoginState = (loginData) =>  {
    return{
        type: t.SET_LOGIN_STATE,
        payload: loginData
    }
}