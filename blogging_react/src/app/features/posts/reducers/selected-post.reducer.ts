import { Post } from "../models/post.model";

export const GET_POST = 'GET_POST';
export const SelectedPostReducer = (state: Post = null, action: any) => {
    switch (action.type) {
        case GET_POST:
            return action.payload.data;
        default:
            return state;
    }
}