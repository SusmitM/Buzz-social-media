import { useContext } from "react";
import { getAllPosts } from "../services/Data/getAllPosts";
import { useState } from "react";
import { useEffect } from "react";

const { createContext } = require("react");

const DataContext=createContext();

export const DataContextProvider=({children})=>{

//state to store the explore posts/ all posts
    const [allPosts,setPosts]=useState();
    

  //function to get all the post
  
  const getPosts=async()=>{
    try{
        const response=await getAllPosts();
       if(response.status===200){
        //returning the posts
        setPosts(response.data.posts) 
       }

    }
    catch(error){
        console.error(error);
    }
  }
  useEffect(()=>{
    getPosts();
  },[])

    return(
        <DataContext.Provider value={{getPosts,allPosts}}>
            {children}
        </DataContext.Provider>
    )
}

export const useDataContext=()=>useContext(DataContext);