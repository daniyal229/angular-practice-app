import { ADD_ING } from "../actions";
import { UPD_ING } from "../actions";
import { DEL_ING } from "../actions";

export default function(state=[], action) {

    switch (action.type) {
        case ADD_ING: {
            return [...state, action.payload]
        }
        case UPD_ING: {
            let newState = state.slice();
            newState[action.payload.index] = action.payload.data;
            return newState
        }
        case DEL_ING: {
            return [    
                ...state.slice(0, action.payload),
                ...state.slice(action.payload + 1) 
            ]
        }
        default: 
            return state;
    }
}