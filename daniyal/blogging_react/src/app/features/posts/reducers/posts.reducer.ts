import { Post } from "../models/post.model";

export const GET_POSTS = 'GET_POSTS';

export const PostsReducer = (state: any = {}, action : any) => {
    switch (action.type) {
        case GET_POSTS:
            return action.payload.data
    
        default:
            return state;
    }
}