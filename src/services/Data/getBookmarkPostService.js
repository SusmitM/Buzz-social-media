import axios from "axios";

export const getBookmarkPostService=(loginToken)=>
axios.get(`/api/users/bookmark`,{
    headers:{
        authorization: loginToken
    }
})