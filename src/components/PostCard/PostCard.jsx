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
  Menu,
  MenuItem,
  Button,
  Paper,
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

export const PostCard = ({data}) => {
  
  const { userData } = useAuthContext();
  const {
    likePost,
    dislikePost,
    bookmarkedPost,
    bookmarkPost,
    removeBookmarkPost,
    deletePost
  } = useDataContext();
  const { _id, content, likes, username, mediaURL } = data;

  const isPostLiked = likes?.likedBy.find(
    ({ _id }) => _id === userData.user._id
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
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card sx={{ maxWidth: 360, margin: 5, boxShadow: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            {username}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
        }
        title={username}
        subheader="September 14, 2016"
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={()=>{deletePost(_id);handleClose()}}>Delete</MenuItem>
      </Menu>

      <CardMedia
        component="img"
        height="194"
        image={mediaURL}
        alt="Paella dish"
        sx={{ display: mediaURL ? "" : "none" }}
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
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
