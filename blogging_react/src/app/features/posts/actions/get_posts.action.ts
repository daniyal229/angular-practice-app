import { GET_POSTS } from "../reducers/posts.reducer";
import Axios from "axios";
import { environment } from "../../../environment";
import { Post } from "../models/post.model";

export const getPosts = () => {
    let type = GET_POSTS;
    let payload = Axios.get(`${environment.api.baseUrl}/posts?key=${environment.api.key}`,
        {
            transformResponse: (data, headers) => {
                data = JSON.parse(data)
                let posts: any = {};
                for (let post of data) {
                    posts[post.id] = new Post(post);
                }
                return posts;
            }
        }
    )
    return {
        type: type,
        payload: payload
     }
}