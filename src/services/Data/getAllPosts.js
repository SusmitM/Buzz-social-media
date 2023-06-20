import axios from "axios";

export const getAllPosts=()=>{
    return axios.get(`/api/posts`)
}