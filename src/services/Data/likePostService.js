import axios from "axios"

export const likePostService = (postId,loginToken) => {
  
  return axios.post(`/api/posts/like/${postId}`,
  {},
  {
    headers: {  
      authorization: loginToken,
    },
  })
}



