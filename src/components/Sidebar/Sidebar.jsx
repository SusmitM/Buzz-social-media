import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItem,
  Button,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { AddPostModal } from "../AddPostModal/AddPostModal";
import { useNavigate } from "react-router-dom";





export const Sidebar = () => {
  const navigate=useNavigate();
  
  return (
    <Box flex={1} p={1} sx={{ display: { xs: "none", sm: "block" },justifyContent:"center",minWidth:"170px" }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>navigate("/")}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>navigate("/explore")}>
              <ListItemIcon>
                <ExploreIcon />
              </ListItemIcon>
              <ListItemText primary="Explore" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>navigate("/bookmarks")}>
              <ListItemIcon>
                <BookmarkIcon />
              </ListItemIcon>
              <ListItemText primary="Bookmarks" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>navigate("/liked")}>
              <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemText primary="Liked Posts" />
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
