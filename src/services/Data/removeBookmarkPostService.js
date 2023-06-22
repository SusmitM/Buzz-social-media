import axios from "axios";

export const removeBookmarkPostService=(postId,loginToken)=>
axios.post(`/api/users/remove-bookmark/${postId}`,
{},
{
    headers:{
        authorization: loginToken
    }
})