import axios from "axios"


export const followUserService=(loginToken,followUserId)=>{
    return axios.post(`/api/users/follow/${followUserId}`,{},{
        headers: {
            authorization: loginToken,
        }
    })
}