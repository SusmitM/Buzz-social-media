import { useNavigate } from "react-router-dom";
import { loginService } from "../services/Auth/login";
import { signUpService } from "../services/Auth/signUp";
import { editProfileService } from "../services/Auth/EditProfile";
import { toast } from 'react-toastify';

const { createContext, useContext, useState, useEffect } = require("react");

const AuthContext = createContext();

export const AuthContextProvider = ({children }) => {

 
  const navigate=useNavigate();

  //getting the userData from local storage

  const localStorageData=JSON.parse(localStorage.getItem("data"));


  //state to store the userDetails
  const [userData,setUserData]=useState(localStorageData);

  //signUp function

  const signUpHandler=async(signUpData)=>{
    try{
      const {status,data} = await signUpService(signUpData);
      if(status===201){
        toast.success("SignUp Successful")
        navigate("/signin")
       
      }
    }
    catch(error){
      toast.error(error.response.data.errors[0])
      console.error(error)
    }
  }

  
  //login function

  const loginHandler= async(loginData)=>{
    try{
      const {data,status}= await loginService(loginData);
      if(status===200){

        toast.success("Login Successful")

        const {encodedToken,foundUser}=data;
     

        //setting the encoded token in local storage

        localStorage.setItem("data",JSON.stringify({token:encodedToken,user:foundUser}));

        //updating the local state with token and userData
        
        setUserData({token:encodedToken,user:foundUser});

        //navigating to home on successful login
        navigate("/")

      }
    }
    catch(error){
      toast.error(error.response.data.errors[0])
      console.log(error)
    }

  }


  //logout function

  const logout=()=>{
    toast.success("Successfully Logged-Out")
    localStorage.removeItem("data");
    navigate("/signin")


  }
  //edit userData
  const editProfile=async(updatedProfileData)=>{
    try{
      const {data,status}=await editProfileService(updatedProfileData, userData.token)
      if(status===201){
        toast.success("Successfully Edited Profile Data")

      setUserData(prev=>({...prev,user:data?.user}));
       return data?.user

      }
    }
    catch(error){
      toast.error(error.response.data.errors[0])
      console.error(error)
    }
  }
 
  useEffect(()=>{
    if(localStorageData){
      setUserData(JSON.parse(localStorage.getItem("data")));

    }
  },[])


  return(
    <AuthContext.Provider value={{userData,setUserData,loginHandler,editProfile,signUpHandler,localStorageData,logout}}>
        {children}
    </AuthContext.Provider>
  )
};

export const useAuthContext = () => useContext(AuthContext);
