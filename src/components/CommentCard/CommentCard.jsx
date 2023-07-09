import { Avatar, Box, IconButton, Menu, MenuItem, Paper, Typography, useTheme } from "@mui/material";
import { useDataContext } from "../../contexts/DataContext";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { AddCommentModal } from "../AddCommentModal";


export const CommentCard = ({data,username,postId}) => {

    const theme =useTheme();
    const {userData}=useAuthContext();
    const {users, followUser, unfollowUser,deleteComment}=useDataContext();
    const postOwner = users?.find((userData) => userData.username === username);
    const commentOwner = users?.find((userData) => userData.username === data?.username);
    const isFollowed = userData?.user.following.find(
      (data) => data._id === commentOwner?._id
    )
      ? true
      : false;
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const removeComment=()=>{
      deleteComment(postId,data?._id)

    }
    
    
  return (
    <Paper sx={{ display: "flex",width: { xs: 350, sm: 550 },mt:2,p:1 }}>
      <Box  sx={{
              display: "flex",
              justifyContent: "center",
              
            }} flex={1}>
        <Avatar  src={commentOwner?.profileAvatar} sx={{ height: "50px", width: "50px" }} />
        
      </Box>
      <Box flex={4}>
        <Box sx={{ display: "flex",flexDirection:"column"}}>
          <Box sx={{ display: "flex",alignItems:"baseline",justifyContent:"space-between"}}>
          <Box sx={{ display: "flex"}}>
          <Typography sx={{ fontSize: "1rem", fontWeight: 450 }}>
          {commentOwner?.firstName} {commentOwner?.lastName}
          </Typography>
          <Typography sx={{ fontSize: "0.89rem" }}>  @{commentOwner?.username}</Typography>
          </Box>
          <IconButton aria-label="settings" onClick={handleClick}  >
              <MoreVertIcon />
            </IconButton>
          </Box>
          {userData?.user?._id === commentOwner?._id ? (
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <AddCommentModal editing="true" commentContent={data} postId={postId}/>
           
            <MenuItem
              onClick={() => {
                removeComment()
                handleClose();
              }}
            >
              Delete
            </MenuItem>
          </Menu>
        ) : (
          <Menu
            
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
                  unfollowUser(commentOwner?._id);
                  handleClose();
                }}
              >
                Following
              </MenuItem>
            ) : (
              <MenuItem
                onClick={() => {
                  followUser(commentOwner?._id);
                  handleClose();
                }}
              >
                Follow
              </MenuItem>
            )}
          </Menu>
        )}
          <Typography sx={{ fontSize: "0.9rem" }}>Replying To @{postOwner?.username}</Typography>

          <Typography
          variant="subtitle2"
            sx={{ textAlign: "left" }}
            color={theme.palette.mode === "dark" ? "white" : "black"}
          >
           {data?.text}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};