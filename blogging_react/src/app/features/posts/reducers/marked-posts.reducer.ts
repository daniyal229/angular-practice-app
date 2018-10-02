import { Post } from "../models/post.model";

export const MARK_POST = 'MARK_POST'
export const MarkedPostsReducer = (state: any = [], action: any) => {
    switch (action.type) {
        case MARK_POST:
            let post = state.find(
                (p: Post) => {
                    return p.id == action.payload.id
                }
            )
            if(!!!post) {
                return state.concat([action.payload])
            } else {
                return state.filter((p: Post) => {
                    return p.id != post.id
                })
            }
        default:
            return state;
    }
}