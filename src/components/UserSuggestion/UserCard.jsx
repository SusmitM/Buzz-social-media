import {
  Avatar,
  Box,
  Grid,
  List,
  ListItemAvatar,
  ListItemText,
  Typography,
  ListItem,
  IconButton,
  Button,
} from "@mui/material";
import styled from "@emotion/styled";
import AddIcon from "@mui/icons-material/Add";
import { useDataContext } from "../../contexts/DataContext";
import { useAuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  cursor:"pointer"
}));
export const UserCard = ({ profileData }) => {
  const {
    _id,
    firstName,
    lastName,
    username,
    following,
    followers,
    profileAvatar,
  } = profileData;

  const navigate=useNavigate()


  const {followUser,unfollowUser}=useDataContext();
  const { userData} = useAuthContext();

  const isFollowed=userData?.user.following.find(data=>data._id===_id)? true : false;

  


  const followHandler=()=>{
    followUser(_id);
  }
  const unFollowHandler=()=>{
    unfollowUser(_id);
  }

  return (
    <Demo>
      <List>
        <ListItem
          sx={{
            display: "flex",
            maxWidth: "300px",
            flexDirection: { md: "column", lg: "row" },
            boxShadow: 1,
            gap: 1,
            marginBottom: "10px",
            justifyContent: "space-between",
          }}
        >
          
          <ListItemAvatar  onClick={()=>navigate(`/profile/${_id}`)}>
            <Avatar src={profileAvatar} />
          </ListItemAvatar>

          <Box sx={{ display: "flex", flexDirection: "column" }}  onClick={()=>navigate(`/profile/${_id}`)}>
            <Box>
              {firstName} {lastName}{" "}
            </Box>
            <Box>@{username}</Box>
          </Box>
          
          {isFollowed ?  <Button
            variant="contained"
            sx={{
              borderRadius: "18px",
              fontWeight: 300,
              padding: "7px",
              fontSize: "0.9rem",
              textTransform: "none",
            }}
            onClick={()=>unFollowHandler()}
          >
            {" "}
           
            Following
          </Button>: <Button
            variant="contained"
            sx={{
              borderRadius: "18px",
              fontWeight: 300,
              padding: "5px",
              fontSize: "0.9rem",
              textTransform: "none",
            }}
            onClick={()=>followHandler()}
          >
            {" "}
            <AddIcon />
            Follow
          </Button>}

         
        </ListItem>
      </List>
    </Demo>
  );
};
