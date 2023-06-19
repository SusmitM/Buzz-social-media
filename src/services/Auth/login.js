import axios from "axios";

export const loginService = (loginData) =>{
  console.log(loginData.username)
return axios.post(`/api/auth/login`, {
    username: loginData.username,
    password: loginData.password,
  })
}

