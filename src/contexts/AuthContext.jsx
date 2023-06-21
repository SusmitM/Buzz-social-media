import { useNavigate } from "react-router-dom";
import { loginService } from "../services/Auth/login";

const { createContext, useContext, useState, useEffect } = require("react");

const AuthContext = createContext();

export const AuthContextProvider = ({children }) => {

  const navigate=useNavigate();

  //geting the userData from local storage

  const localStorageData=JSON.parse(localStorage.getItem("data"));


  //state to store the userDetails
  const [userData,setUserData]=useState(localStorageData);

  
  //login function

  const loginHandler= async(loginData)=>{
    try{
      const {data,status}= await loginService(loginData);
      if(status===200){
        const {encodedToken,foundUser}=data;
        console.log(data)

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

  //logout function

  const logout=()=>{
    localStorage.removeItem("data");
    navigate("/signin")


  }
 
  useEffect(()=>{
    if(localStorageData){
      setUserData(JSON.parse(localStorage.getItem("data")));

    }
  },[])


  return(
    <AuthContext.Provider value={{userData,loginHandler,localStorageData,logout}}>
        {children}
    </AuthContext.Provider>
  )
};

export const useAuthContext = () => useContext(AuthContext);
