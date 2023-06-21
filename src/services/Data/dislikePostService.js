import axios from "axios";

export const dislikePostService = (postId, loginToken) => {

    return axios.post(`/api/posts/dislike/${postId}`, {}, {
        headers: {
            authorization: loginToken,
        }
    })
}