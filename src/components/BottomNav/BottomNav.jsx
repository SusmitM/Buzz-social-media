import { useState } from "react";

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExploreIcon from '@mui/icons-material/Explore';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";
import { AddPostModal } from "../AddPostModal/AddPostModal";
export const BottomNav= () => {
  const navigate=useNavigate()
  const [Value, setValue] = useState('Home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
       <BottomNavigation sx={{ maxWidth: 450 }} value={Value} onChange={handleChange}>
    <BottomNavigationAction
      label="Home"
      value="Home"
      icon={<HomeIcon />}
      onClick={()=>{navigate("/")}}
    />
    <BottomNavigationAction
      label="Explore"
      value="Explore"
      icon={<ExploreIcon  />}
      onClick={()=>{navigate("/explore")}}
    />
     
     <AddPostModal mobileView="true"/>
     <BottomNavigationAction label="Liked" value="Liked" icon={<FavoriteIcon  />}
      onClick={()=>{navigate("/liked")}} />
    <BottomNavigationAction
      label="Bookmark"
      value="Bookmark"
      icon={<BookmarksIcon />}
      onClick={()=>{navigate("/bookmarks")}}
    />
   
  </BottomNavigation>

      </Paper>
    
   
  )
}
