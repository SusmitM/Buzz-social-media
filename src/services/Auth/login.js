import axios from "axios";

export const loginService = (loginData) =>{
  
return axios.post(`/api/auth/login`, {
    username: loginData.username,
    password: loginData.password,
  })
}

