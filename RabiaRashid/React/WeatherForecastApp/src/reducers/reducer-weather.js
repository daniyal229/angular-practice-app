import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER: {
            // DON'T DO 'state.push'. WE DON'T MANIPULATE EXISTING STATE DIRECTLY. INSTEAD RETURN A NEW OBJECT ALWAYS 
            // return state.concat([action.payload.data]);
            return [action.payload.data, ...state];
        }
    } 
    return state;
}