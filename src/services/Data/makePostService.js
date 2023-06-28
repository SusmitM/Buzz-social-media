import axios from "axios"

export const makePostService = (postDetails,loginToken) => {
  
  return axios.post(`/api/posts`,
  {
    postData: postDetails
  },
  {
    headers: {  
      authorization: loginToken,
    },
  })
}