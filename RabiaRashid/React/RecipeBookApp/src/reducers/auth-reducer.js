import { SIGN_UP_SUCCESS,
         SIGN_UP_FAILED,
         SIGN_IN_SUCCESS,
         SIGN_IN_FAILED,
         LOG_OUT_SUCCESS } from '../actions';

export default function(state={}, action) {
    switch(action.type) {
        case SIGN_UP_SUCCESS:
            return {loggedIn: false, error: '', token: ''}
            return true

        case SIGN_UP_FAILED:
            return {loggedIn: false, error: action.payload.message, token: ''}

        case SIGN_IN_SUCCESS:
            return {loggedIn: true, error: '', token: action.payload}
  
        case SIGN_IN_FAILED:
            return {loggedIn: false, error: action.payload.message, token: ''}

        case LOG_OUT_SUCCESS:
            return {loggedIn: false, error: '', token: ''}


        default: 
            return state;
    }
}