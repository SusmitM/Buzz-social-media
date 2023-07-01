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
import { AddPostModal } from "../../components/AddPostModal/AddPostModal";
import { useNavigate } from "react-router-dom";

export const PostCard = ({ data }) => {
  const navigate = useNavigate();
  const { userData } = useAuthContext();
  const { users } = useDataContext();

  const {
    likePost,
    dislikePost,
    bookmarkedPost,
    bookmarkPost,
    removeBookmarkPost,
    deletePost,
    setOpen,
    setEditing,
  } = useDataContext();
  const { _id, content, likes, username, mediaURL, createdAt } = data;

  const postOwner = users?.find((userData) => userData.username === username);

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

  const [show, setShow] = useState(false);

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
      <Card sx={{ maxWidth: 360, margin: 5, boxShadow: 2 }}>
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
            <Box sx={{display:"flex",gap:"2rem",alignItems:"baseline"}} onClick={() => navigateToProfile()}>
              <Box sx={{ fontWeight: 500, fontSize: "1rem" }}>
                {postOwner?.firstName} {postOwner?.lastName}
              </Box>
              <Box>{new Date(createdAt)
                .toDateString()
                .split(" ")
                .slice(1, 4)
                .join(" ")}</Box>
            </Box>
          }
          subheader={<Box onClick={() => navigateToProfile()}>@{username}</Box>}
        />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => {
              setOpen((prev) => !prev);
              handleClose();
              setShow((prev) => !prev);
              setEditing(true);
            }}
          >
            Edit
          </MenuItem>
          <MenuItem
            onClick={() => {
              deletePost(_id);
              handleClose();
            }}
          >
            Delete
          </MenuItem>
        </Menu>

        <CardMedia
          component="img"
          height="194"
          image={mediaURL}
          alt="postImg"
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
      {show && <AddPostModal postData={data} />}
    </>
  );
};
