import axios from "axios";

export const bookmarkPostService=(postId,loginToken)=>
axios.post(`/api/users/bookmark/${postId}`,
{},
{
    headers:{
        authorization: loginToken,
}})