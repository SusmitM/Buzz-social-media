import axios from "axios";

export const getUserData=()=>{
    return axios.get(`/api/users/5d1b8920-c6cc-4d6a-8a0f-039d01dd4cf0`)
}