import { useContext } from "react";
import { getAllPosts } from "../services/Data/getAllPosts";
import { useState } from "react";
import { useEffect } from "react";
import { likePostService } from "../services/Data/likePostService";
import { useAuthContext } from "./AuthContext";
import { dislikePostService } from "../services/Data/dislikePostService";

const { createContext } = require("react");

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const { userData } = useAuthContext();

  //state to store the explore posts/ all posts
  const [allPosts, setPosts] = useState();

  //function to get all the post

  const getPosts = async () => {
    try {
      const response = await getAllPosts();
      if (response.status === 200) {
        //returning the posts
        setPosts(response.data.posts);
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
        setPosts(data.posts);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // function to dislike posts

  const dislikePost = async (postId) => {
    try {
      const { data, status } = await dislikePostService(postId, userData.token);

      if (status === 201) {
        setPosts(data.posts);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <DataContext.Provider value={{ getPosts, allPosts, likePost, dislikePost }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
