import { Post } from "../models/post.model";
import { CREATE_POST } from "../reducers/posts.reducer";
import Axios from "axios";
import { environment } from "../../../environment";

export const createPost = (post: Post) => {
    let type = CREATE_POST;
    let payload = Axios.post(`${environment.api.baseUrl}/posts/?key=${environment.api.key}`, post, {
        transformResponse: (data, headers) => {
            data = JSON.parse(data)
            return new Post(data)
        }
    })

    return { type, payload }
}