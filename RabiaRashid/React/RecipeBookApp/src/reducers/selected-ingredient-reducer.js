import { SEL_ING } from "../actions";

export default function(state=null, action) {
    switch(action.type) {
        case SEL_ING:
            return action.payload
        default:
            return state
    }
}