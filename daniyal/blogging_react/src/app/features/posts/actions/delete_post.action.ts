import { DELETE_POST } from "../reducers/posts.reducer";
import Axios from "axios";
import { environment } from "../../../environment";
import { Post } from "../models/post.model";

export const deletePost = (id: number, callback: Function) => {
    let type = DELETE_POST;
    let payload = Axios.delete(`${environment.api.baseUrl}/posts/${id}?key=${environment.api.key}`,{
        transformResponse: (data, headers) => {
            return new Post(JSON.parse(data))
        }
    }).then(
        (success) => {
            callback(success);
        }
    )

    return { type, payload }
}