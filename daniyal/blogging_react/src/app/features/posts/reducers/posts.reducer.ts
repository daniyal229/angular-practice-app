import { Post } from "../models/post.model";

export const GET_POSTS = 'GET_POSTS';
export const CREATE_POST = 'CREATE_POST';

export const PostsReducer = (state: any = {}, action : any) => {
    switch (action.type) {
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