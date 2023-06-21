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



//ebe8e2b7-9cd2-492c-89cf-2310587cf171
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWQzNGNhZC1iZTg1LTQ5ZDUtOTBjMi0zMDI4NzdjMWIzYTYiLCJ1c2VybmFtZSI6InJhalNoYXJtYSJ9.g8H6ReiAoyVPsXH8Bb8aAN2BtLcx1gjIOLcc8VQVtW8


//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWQzNGNhZC1iZTg1LTQ5ZDUtOTBjMi0zMDI4NzdjMWIzYTYiLCJ1c2VybmFtZSI6InJhalNoYXJtYSJ9.g8H6ReiAoyVPsXH8Bb8aAN2BtLcx1gjIOLcc8VQVtW8

///api/posts/like/ebe8e2b7-9cd2-492c-89cf-2310587cf171