import { useNavigate } from "react-router-dom";
import { loginService } from "../services/Auth/login";


const { createContext, useContext, useState, useEffect } = require("react");

const AuthContext = createContext();

export const AuthContextProvider = ({children }) => {

  const navigate=useNavigate();

  //geting the userData from local storage

  const localStorageData=JSON.parse(localStorage.getItem("data"));


  //state to store the userDetails
  const [userData,setUserData]=useState();


  //login function

  const loginHandler= async(loginData)=>{
    try{
      const {data,status}= await loginService(loginData);
      if(status===200){
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
      console.log(error)
    }

  }
  console.log(localStorage.getItem("token"))
  useEffect(()=>{
    if(localStorageData){
      setUserData({token:localStorageData.token,user:localStorageData.foundUser});

    }
  },[])


  return(
    <AuthContext.Provider value={{loginHandler,localStorageData}}>
        {children}
    </AuthContext.Provider>
  )
};

export const useAuthContext = () => useContext(AuthContext);
