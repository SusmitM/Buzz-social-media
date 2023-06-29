import axios from "axios"


export const unfollowUserService=(loginToken,followUserId)=>{
    return axios.post(`/api/users/unfollow/${followUserId}`,{},{
        headers: {
            authorization: loginToken,
        }
    })
}