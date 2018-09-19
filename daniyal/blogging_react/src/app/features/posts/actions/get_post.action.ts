import Axios from "axios";
import { environment } from "../../../environment";
import { Post } from "../models/post.model";
import { GET_POST } from "../reducers/selected-post.reducer";

export const getPost = (id: number) => {
    let type = GET_POST;
    let payload = Axios.get(`${environment.api.baseUrl}/posts/${id}?key=${environment.api.key}`,{
        transformResponse: (data, headers) => {
            return new Post(JSON.parse(data))
        }
    })

    return { type, payload }
}