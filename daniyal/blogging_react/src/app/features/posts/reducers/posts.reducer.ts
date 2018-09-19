import { Post } from "../models/post.model";

export const GET_POSTS = 'GET_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

export const PostsReducer = (state: any = {}, action : any) => {
    switch (action.type) {
        case DELETE_POST: 
            let updatedState: any = {}
            for(let key of Object.keys(state)) {
                if(key != action.payload.data.id)
                    updatedState[key] = state[key];
            }
            return updatedState;
        case GET_POSTS:
            return action.payload.data
        case CREATE_POST:
            let newState: any = {};
            for(let key of Object.keys(state)) {
                newState[key] = state[key];
            }
            newState[action.payload.data.id] = action.payload.data
            return newState;
        default:
            return state;
    }
}