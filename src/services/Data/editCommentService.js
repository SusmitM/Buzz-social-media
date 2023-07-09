import axios from "axios";


export const editCommentService = (
        postId,
        commentId,
        commentData,
        encodedToken
    ) =>
    axios.post(
        `/api/comments/edit/${postId}/${commentId}`, {
            commentData: commentData
        }, {
            headers: {
                authorization: encodedToken
            }
        }
    );