import axios from "axios";

export const signUpService=(signUpData)=>{
    return axios.post(`/api/auth/signup`,{
        email:signUpData.email,
        password: signUpData.password,
        username: signUpData.username,
        firstName: signUpData.firstName,
        lastName: signUpData.lastName

    })
}