import { useContext, useReducer, useEffect, createContext } from "react";
import { getAllPosts } from "../services/Data/getAllPosts";
import { toast } from "react-toastify";
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
import { getAllUsers } from "../services/Data/getAllUsers";
import { followUserService } from "../services/Data/followUserService";
import { unfollowUserService } from "../services/Data/unfollowUserService";
import { getUserData } from "../services/Data/getUserData";
import { addCommentService } from "../services/Data/addCommentService";
import { deleteCommentService } from "../services/Data/deleteCommentService";
import { editCommentService } from "../services/Data/editCommentService";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const { userData, setUserData } = useAuthContext();

  // Reducer to store the posts data
  const [dataState, dataDispatch] = useReducer(dataReducer, initialDataState);

  const { allPosts, bookmarkedPost, users } = dataState;

  useEffect(() => {
    getPosts();
    getBookmarkedPosts();
    getUsers();
  }, [userData]);

  // Function to get all the users
  const getUsers = async () => {
    try {
      const { status, data } = await getAllUsers();

      if (status === 200) {
        const isLoggedInUser = data?.users.map(
          ({ _id }) => _id === userData?.user._id
        );

        dataDispatch({
          type: "addUsers",
          users: isLoggedInUser ? data?.users : [...data?.users.userData?.user],
        });
      }
    } catch (error) {
      toast.error(error?.response?.data?.errors[0]);
      console.error(error);
    }
  };

  // Function to get all the posts
  const getPosts = async () => {
    try {
      const response = await getAllPosts();
      if (response.status === 200) {
        // Returning the posts
        dataDispatch({
          type: "addPosts",
          posts: response?.data.posts,
        });
      }
    } catch (error) {
      toast.error(error?.response?.data?.errors[0]);
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
          posts: data?.posts,
        });
      }
    } catch (error) {
      toast.error(error?.response?.data?.errors[0]);
      console.error(error);
    }
  };

  // Function to dislike posts
  const dislikePost = async (postId) => {
    try {
      const { data, status } = await dislikePostService(postId, userData.token);
      if (status === 201) {
        dataDispatch({
          type: "updatePosts",
          posts: data?.posts,
        });
      }
    } catch (error) {
      toast.error(error?.response?.data?.errors[0]);
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
      toast.error(error?.response?.data?.errors[0]);
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
        toast.success("Added to Bookmarks");
        dataDispatch({
          type: "updateBookmarkedPosts",
          bookmarkedPosts: data.bookmarks,
        });
      }
    } catch (error) {
      toast.error(error?.response?.data?.errors[0]);
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
        toast.success("Removed From Bookmarks");
        dataDispatch({
          type: "updateBookmarkedPosts",
          bookmarkedPosts: data?.bookmarks,
        });
      }
    } catch (error) {
      toast.error(error?.response?.data?.errors[0]);
      console.error(error);
    }
  };

  // Function to make a post
  const makePost = async (postDetails) => {
    try {
      const { status, data } = await makePostService(
        postDetails,
        userData?.token
      );
      if (status === 201) {
        toast.success("Post Added Successfully");
        dataDispatch({
          type: "addPosts",
          posts: data?.posts,
        });
      }
    } catch (error) {
      toast.error(error?.response?.data?.errors[0]);
      console.error(error);
    }
  };

  // Function to delete posts
  const deletePost = async (postId) => {
    try {
      const { data, status } = await deletePostService(postId, userData.token);
      if (status === 201) {
        toast.success("Post Deleted");
        dataDispatch({
          type: "updatePosts",
          posts: data?.posts,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.errors[0]);
    }
  };
  // Function to edit a post
  const editPost = async (postDetails, postId) => {
    try {
      const { status, data } = await editPostService(
        postDetails,
        userData?.token,
        postId
      );
      if (status === 201) {
        toast.success("Edited Post Successfully");
        dataDispatch({
          type: "addPosts",
          posts: data?.posts,
        });
      }
    } catch (error) {
      toast.error(error?.response?.data?.errors[0]);
      console.error(error);
    }
  };
  //function to follow an user

  const followUser = async (userId) => {
    try {
      const { data, status } = await followUserService(userData.token, userId);
      console.log(data.user.following)
      if (status === 200) {
        //Note add followers also in 3rd peroson data
        toast.success(
          `You Followed ${data?.followUser.firstName} ${data?.followUser.lastName}`
        );

        setUserData((prev) => ({ ...prev, user: data?.user }));

        dataDispatch({
          type: "updateUserData",
          userData: data?.user,
        });
      }
    } catch (error) {
      toast.error(error?.response?.data?.errors[0]);
      console.error(error);
    }
  };
  //function to unfollow an user

  const unfollowUser = async (userId) => {
    try {
      const { data, status } = await unfollowUserService(
        userData?.token,
        userId
      );
      if (status === 200) {
        toast.success(
          `You Unfollowed ${data?.followUser.firstName} ${data?.followUser.lastName}`
        );
        setUserData((prev) => ({ ...prev, user: data.user }));
        dataDispatch({
          type: "updateUserData",
          userData: data.user,
        });
      }
    } catch (error) {
      toast.error(error?.response?.data?.errors[0]);
      console.error(error);
    }
  };

  //function to get an single userData

  const getUser = async ({ userId }) => {
    try {
      const { data, status } = await getUserData(userId);
      if (status === 200) {
        return data?.user;
      }
    } catch (error) {
      toast.error(error?.response?.data?.errors[0]);
      console.error(error);
    }
  };
  // Function to make a comment
  const addComment = async (postId, commentData) => {
    console.log(postId, commentData);
    try {
      const { status, data } = await addCommentService(
        postId,
        commentData,
        userData?.token
      );
      if (status === 201) {
        toast.success("Comment Added Successfully");

        dataDispatch({
          type: "addPosts",
          posts: data?.posts,
        });
      }
    } catch (error) {
      toast.error(error?.response?.data?.errors[0]);
      console.error(error);
    }
  };
    // Function to delete comment
    const deleteComment = async (postId, commentId) => {
      try {
        const { data, status } = await deleteCommentService(postId, commentId, userData.token);
        if (status === 201) {
          toast.success("Comment Deleted");
          dataDispatch({
            type: "updatePosts",
            posts: data?.posts,
          });
        }
      } catch (error) {
        console.error(error);
        toast.error(error?.response?.data?.errors[0]);
      }
    };
    // Function to edit a Comment
  const editComment = async (postId,commentId,commentData) => {
    try {
      const { status, data } = await editCommentService(
        postId,commentId,commentData,userData?.token
        
      );
      if (status === 201) {
        toast.success("Edited Comment Successfully");
        dataDispatch({
          type: "addPosts",
          posts: data?.posts,
        });
      }
    } catch (error) {
      toast.error(error?.response?.data?.errors[0]);
      console.error(error);
    }
  };

  return (
    <DataContext.Provider
      value={{
        users,
        dataDispatch,
        getPosts,
        allPosts,
        likePost,
        dislikePost,
        bookmarkPost,
        removeBookmarkPost,
        bookmarkedPost,
        makePost,
        deletePost,
        editPost,
        followUser,
        unfollowUser,
        getUser,
        addComment,
        deleteComment,
        editComment 
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
