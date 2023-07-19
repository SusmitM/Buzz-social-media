import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItem,
  Button,
  Typography
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { AddPostModal } from "../AddPostModal/AddPostModal";
import { useNavigate } from "react-router-dom";
import { useState } from "react";





export const Sidebar = () => {
  const navigate=useNavigate();
  const [selectedPage,setSelectedPage]=useState("Home");
  
  return (
    <Box flex={1} p={1} sx={{ display: { xs: "none", sm: "block" },justifyContent:"center",minWidth:"170px" }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>{navigate("/");setSelectedPage("Home")}}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={<Typography style={{ fontWeight:selectedPage==="Home"?600:'' }}>Home</Typography>} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton  onClick={()=>{navigate("/explore");setSelectedPage("Explore")}}>
              <ListItemIcon>
                <ExploreIcon />
              </ListItemIcon>
              <ListItemText primary={<Typography style={{ fontWeight:selectedPage==="Explore"?600:'' }}>Explore</Typography>}/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton  onClick={()=>{navigate("/bookmarks");setSelectedPage("Bookmarks")}}>
              <ListItemIcon>
                <BookmarkIcon />
              </ListItemIcon>
              <ListItemText primary={<Typography style={{ fontWeight:selectedPage==="Bookmarks"?600:'' }}>Bookmarks</Typography>} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton  onClick={()=>{navigate("/liked");setSelectedPage("Liked Post")}}>
              <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemText primary={<Typography style={{ fontWeight:selectedPage==="Liked Post"?600:'' }}>Liked Post</Typography>} />
            </ListItemButton>
          </ListItem>
        </List>
      <Box className="BtnContainer" sx={{display:"flex",justifyContent:"center"}}>
     <AddPostModal/>
      </Box>
      </Box>
      
    </Box>
  );
};
