import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  IconButton,
  Avatar,
  Box,
  Menu,
  MenuItem,
  useTheme
} from "@mui/material";
import { toast } from "react-toastify";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import { useDataContext } from "../../contexts/DataContext";
import { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";

import { useNavigate } from "react-router-dom";
import { EditPostModal } from "../EditPostModal/EditPostModal";


export const PostCard = ({ data }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const { userData } = useAuthContext();
  const { users } = useDataContext();

  const {
    likePost,
    dislikePost,
    bookmarkedPost,
    bookmarkPost,
    removeBookmarkPost,
    deletePost,
    followUser,
    unfollowUser,
  } = useDataContext();
  const { _id, content, likes, username, mediaURL, createdAt } = data;
  

  const postOwner = users?.find((userData) => userData.username === username);
  const isFollowed = userData?.user.following.find(
    (data) => data._id === postOwner?._id
  )
    ? true
    : false;

  const isPostLiked = likes?.likedBy.find(
    ({ _id }) => _id === userData?.user?._id
  )
    ? true
    : false;

  const isPostBookmarked = bookmarkedPost?.find((data) => data?._id === _id)
    ? true
    : false;

  //function to manage post like action
  const handelPostLike = () => {
    isPostLiked ? dislikePost(_id) : likePost(_id);
  };
  //function to manage bookmark post action
  const handelBookmarkPost = () => {
    isPostBookmarked ? removeBookmarkPost(_id) : bookmarkPost(_id);
  };

  //function to copy post link
  const copyLinkHandler = () => {
    navigator.clipboard.writeText(`https://buzz-v1.vercel.app/postDetails/${_id}`);
    toast.success("Post Link Copied!!!");
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigateToProfile = () => {
    navigate(`/profile/${postOwner._id}`);
  };

  return (
    <>
      <Card sx={{ width: { xs: 350, sm: 550 }, margin:"1.5rem 0", boxShadow: 2 }}>
        <CardHeader
          sx={{ cursor: "pointer" }}
          avatar={
            <Avatar
              onClick={() => navigateToProfile()}
              src={postOwner?.profileAvatar}
            />
          }
          action={
            <IconButton aria-label="settings" onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
          }
          title={
            <Box
              sx={{ display: "flex", gap: "2rem", alignItems: "baseline" }}
              onClick={() => navigateToProfile()}
            >
              <Box sx={{ fontWeight: 500, fontSize: "1rem" }}>
                {postOwner?.firstName} {postOwner?.lastName}
              </Box>
              <Box>
                {new Date(createdAt)
                  .toDateString()
                  .split(" ")
                  .slice(1, 4)
                  .join(" ")}
              </Box>
            </Box>
          }
          subheader={<Box onClick={() => navigateToProfile()}>@{username}</Box>}
        />
        {userData?.user?._id === postOwner?._id ? (
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <EditPostModal postOwner={postOwner} data={data} />
            <MenuItem
              onClick={() => {
                deletePost(_id);
                handleClose();
              }}
            >
              Delete
            </MenuItem>
          </Menu>
        ) : (
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {isFollowed ? (
              <MenuItem
                onClick={() => {
                  unfollowUser(postOwner?._id);
                  handleClose();
                }}
              >
                Following
              </MenuItem>
            ) : (
              <MenuItem
                onClick={() => {
                  followUser(postOwner?._id);
                  handleClose();
                }}
              >
                Follow
              </MenuItem>
            )}
          </Menu>
        )}
         <CardContent sx={{cursor:"pointer"}} onClick={()=>navigate(`/postDetails/${_id}`)}>
        <Typography sx={{fontSize: "1.1rem", fontWeight: 500 ,}} color={theme.palette.mode === "dark" ? "white" : "black"}>
              {content}
            </Typography>
        </CardContent>
        
         {
          mediaURL && mediaURL.split("/")[4] === "image" ? (
            <CardMedia sx={{maxHeight:400, objectFit: "contain"}} component="img" image={mediaURL} alt="postImg" />
          ) : mediaURL && mediaURL.split("/")[4] === "video" ? (
            <CardMedia
              component="video"
              alt="postVideo"
              image={mediaURL}
              autoPlay
              sx={{maxHeight:400, objectFit: "contain"}}
              
            />
          ) : (
            <span></span>
          )
}

        <CardActions disableSpacing>
          <Box onClick={() => handelPostLike()}>
            {isPostLiked ? (
              <IconButton>
                <Favorite style={{ color: "red" }} />
              </IconButton>
            ) : (
              <IconButton>
                <FavoriteBorder />
              </IconButton>
            )}
          </Box>

          <Typography>{likes?.likeCount}</Typography>

          <Box onClick={() => handelBookmarkPost()}>
            {isPostBookmarked ? (
              <IconButton>
                <BookmarkIcon style={{ color: "skyblue" }} />
              </IconButton>
            ) : (
              <IconButton>
                <BookmarkBorderIcon />
              </IconButton>
            )}
          </Box>
          <IconButton aria-label="chat">
            <ChatBubbleOutlineIcon />
          </IconButton>
          <IconButton aria-label="share" onClick={copyLinkHandler}>
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};
