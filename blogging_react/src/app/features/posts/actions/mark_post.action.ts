import { MARK_POST } from "../reducers/marked-posts.reducer";
import { Post } from "../models/post.model";

export const markPost = (post: Post) => {
    return {
        type: MARK_POST,
        payload: post
    }
}