import axios from "axios"


export const addCommentService = (postId, commentData, loginToken) =>{
    return(
        axios.post(
            `/api/comments/add/${postId}`, {
                commentData: commentData
            }, {
                headers: {
                    authorization: loginToken
                }
            }
        )
    )
}
    