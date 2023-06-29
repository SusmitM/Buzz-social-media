import { useContext, useReducer, useEffect,createContext } from "react";
import { getAllPosts } from "../services/Data/getAllPosts";
import { useState } from "react";
import { useAuthContext } from "./AuthContext";
import { likePostService } from "../services/Data/likePostService";
import { dislikePostService } from "../services/Data/dislikePostService";
import { bookmarkPostService } from "../services/Data/bookmarkPostService";
import { removeBookmarkPostService } from "../services/Data/removeBookmarkPostService";
import { getBookmarkPostService } from "../services/Data/getBookmarkPostService";
import { makePostService } from "../services/Data/makePostService";
import { deletePostService } from "../services/Data/deletePost";
import { dataReducer, initialDataState } from "../reducers/dataReducer";
import { editPostService } from "../services/Data/editPostService";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const { userData } = useAuthContext();

  // Reducer to store the posts data
  const [dataState, dataDispatch] = useReducer(dataReducer, initialDataState);
  const { allPosts, bookmarkedPost } = dataState;
  // state for input modal
  const [open, setOpen] = useState(false);
  //state for handel edit post

  const [editing,setEditing]=useState(false);
  useEffect(() => {
    getPosts();
    getBookmarkedPosts();
  }, []);

  // Function to get all the posts
  const getPosts = async () => {
    try {
      const response = await getAllPosts();
      if (response.status === 200) {
        // Returning the posts
        dataDispatch({
          type: "addPosts",
          posts: response.data.posts,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Function to like posts
  const likePost = async (postId) => {
    try {
      const { data, status } = await likePostService(postId, userData.token);
      if (status === 201) {
        dataDispatch({
          type: "updatePosts",
          posts: data.posts,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Function to dislike posts
  const dislikePost = async (postId) => {
    try {
      const { data, status } = await dislikePostService(
        postId,
        userData.token
      );
      if (status === 201) {
        dataDispatch({
          type: "updatePosts",
          posts: data.posts,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Function to get all bookmarked posts
  const getBookmarkedPosts = async () => {
    try {
      const { data, status } = await getBookmarkPostService(userData.token);
      if (status === 200) {
        dataDispatch({
          type: "addBookmarkedPosts",
          bookmarkedPosts: data.bookmarks,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Function to bookmark a post
  const bookmarkPost = async (postId) => {
    try {
      const { data, status } = await bookmarkPostService(
        postId,
        userData.token
      );
      if (status === 200) {
        dataDispatch({
          type: "updateBookmarkedPosts",
          bookmarkedPosts: data.bookmarks,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Function to remove a post from bookmarks
  const removeBookmarkPost = async (postId) => {
    try {
      const { data, status } = await removeBookmarkPostService(
        postId,
        userData.token
      );
      if (status === 200) {
        dataDispatch({
          type: "updateBookmarkedPosts",
          bookmarkedPosts: data.bookmarks,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Function to make a post
  const makePost = async (postDetails) => {
    try {
      const { status, data } = await makePostService(
        postDetails,
        userData.token
      );
      if (status === 201) {
        dataDispatch({
          type: "addPosts",
          posts: data.posts,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Function to delete posts
  const deletePost = async (postId) => {
    try {
      const { data, status } = await deletePostService(postId, userData.token);
      if(status===201){
        dataDispatch({
          type: "updatePosts",
          posts: data.posts,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
    // Function to edit a post
    const editPost = async (postDetails,postId) => {
      try {
        const { status, data } = await editPostService(
          postDetails,
          userData.token,
          postId
        );
        if (status === 201) {
          dataDispatch({
            type: "addPosts",
            posts: data.posts,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

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
        makePost,
        deletePost,
        open,
        setOpen,
        editing,
        setEditing,
        editPost
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
