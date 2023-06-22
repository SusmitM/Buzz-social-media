import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  IconButton,
  Avatar,
  Checkbox,
  Box,
} from "@mui/material";
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

export const PostCard = (data) => {
  const { userData } = useAuthContext();
  const { likePost, dislikePost, bookmarkPost, removeBookmarkPost } =
    useDataContext();
  const { _id, content, likes, username, img } = data;

  const isPostLiked = likes.likedBy.find(({ _id }) => _id === userData.user._id)
    ? true
    : false;

  //function to manage post like action
  const handelPostLike = () => {
    isPostLiked ? dislikePost(_id) : likePost(_id);
  };
  //function to manage bookmark post action
  const handelBookmarkPost=()=>{
    bookmarkPost(_id)

  }

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <Card sx={{ maxWidth: 360, margin: 5, boxShadow: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={username}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={img}
        alt="Paella dish"
        sx={{ display: img ? "" : "none" }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>

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

        <Typography>{likes.likeCount}</Typography>

        <Box onClick={() => handelBookmarkPost()}>
          {isPostLiked ? (
            <IconButton>
              <BookmarkBorderIcon />
            </IconButton>
          ) : (
            <IconButton>
              <BookmarkIcon />
            </IconButton>
          )}
        </Box>
        <IconButton aria-label="chat">
          <ChatBubbleOutlineIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
