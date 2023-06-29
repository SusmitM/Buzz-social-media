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

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));
export const UserCard = ({ userData }) => {
  const {
    _id,
    firstName,
    lastName,
    username,
    following,
    followers,
    profileAvatar,
  } = userData;


  const {followUser}=useDataContext();

  const followHandler=()=>{
    followUser(_id);
  }

  return (
    <Demo>
      <List>
        <ListItem
          sx={{
            display: "flex",
            maxWidth: "300px",
            flexDirection: { sm: "column", md: "row" },
            boxShadow: 1,
            gap: 1,
            marginBottom: "10px",
            justifyContent: "space-between",
          }}
        >
          <ListItemAvatar>
            <Avatar src={profileAvatar} />
          </ListItemAvatar>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box>
              {firstName} {lastName}{" "}
            </Box>
            <Box>@{username}</Box>
          </Box>

          <Button
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
          </Button>
        </ListItem>
      </List>
    </Demo>
  );
};
