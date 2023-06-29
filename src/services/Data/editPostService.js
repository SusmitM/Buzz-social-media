import axios from "axios";

export const editPostService=async (postDetails,loginToken,postId)=>{

    return axios.post(`/api/posts/edit/${postId}`,
    { postData: postDetails },
    {
        headers: {  
            authorization: loginToken,
          },
    }) 
}