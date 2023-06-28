import axios from "axios";

export const deletePostService = (postId, loginToken) => {

    return axios.delete(`/api/posts/${postId}`,{
        headers: {
            authorization: loginToken,
        }
    })
}