import { useContext, useReducer } from "react";
import { getAllPosts } from "../services/Data/getAllPosts";
import { useState } from "react";
import { useEffect } from "react";
import { likePostService } from "../services/Data/likePostService";
import { useAuthContext } from "./AuthContext";
import { dislikePostService } from "../services/Data/dislikePostService";
import { bookmarkPostService } from "../services/Data/bookmarkPostService";
import { removeBookmarkPostService } from "../services/Data/removeBookmarkPostService";
import { getBookmarkPostService } from "../services/Data/getBookmarkPostService";
import { dataReducer, initialDataState } from "../reducers/dataReducer";
import { makePostService } from "../services/Data/makePostService";

const { createContext } = require("react");

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const { userData } = useAuthContext();

 //reducer to store the posts data
  const [dataState,dataDispatch]=useReducer(dataReducer,initialDataState);
  const {allPosts,bookmarkedPost}=dataState;



  //function to get all the post

  const getPosts = async () => {
    try {
      const response = await getAllPosts();
      if (response.status === 200) {
        //returning the posts
        dataDispatch({
          type:"addPosts",
          posts:response.data.posts
        })
      }
    } catch (error) {
      console.error(error);
    }
  };

  // function to like posts

  const likePost = async (postId) => {
    try {
      const { data, status } = await likePostService(postId, userData.token);
    
      if (status === 201) {
       
        dataDispatch({
          type: "updatePosts",
          posts:data.posts
        })
      }
      }
     catch (error) {
      console.error(error);
    }
  };

  // function to dislike posts

  const dislikePost = async (postId) => {
    try {
      const { data, status } = await dislikePostService(postId, userData.token);

      if (status === 201) {
      
        dataDispatch({
          type: "updatePosts",
          posts:data.posts
        })
      }
    } catch (error) {
      console.error(error);
    }
  };

  //function to get all bookmarked posts

  const getBookmarkedPosts = async () => {
    try {
      const { data, status } = await getBookmarkPostService(userData.token);

      if (status === 200) {
      
      
        dataDispatch({
          type: "addBookmarkedPosts",
          bookmarkedPosts:data.bookmarks
        })
      }
    } catch (error) {
      console.error(error);
    }
  };

  // function to bookmark a post
  const bookmarkPost = async (postId) => {
    try {
      const { data, status } = await bookmarkPostService(
        postId,
        userData.token
      );

      if (status === 200) {
        
        dataDispatch({
          type: "updateBookmarkedPosts",
          bookmarkedPosts:data.bookmarks
        })
      }
    } catch (error) {
      console.error(error);
    }
  };
  // function to remove a post from bookmarks
  const removeBookmarkPost = async (postId) => {
    try {
      const { data, status } = await removeBookmarkPostService(
        postId,
        userData.token
      );
      if (status === 200) {
       
        dataDispatch({
          type: "updateBookmarkedPosts",
          bookmarkedPosts:data.bookmarks
        })
      }
    } catch (error) {
      console.error(error);
    }
  };

  //function to make a post

  const makePost= async(postDetails)=>{
    try{
      const {status,data}=await makePostService(postDetails,userData.token)
      if(status===201){
        dataDispatch({
          type: "updatePosts",
          posts:data.posts
        })

      }
      
    }
    catch(error){
      console.log(error)
    }
  }
 
  useEffect(() => {
    getPosts();
    getBookmarkedPosts();

  }, []);

  return (
    <DataContext.Provider
      value={{
        getPosts,
        allPosts,
        likePost,
        dislikePost,
        bookmarkPost,
        removeBookmarkPost,
        bookmarkedPost,
        makePost
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
