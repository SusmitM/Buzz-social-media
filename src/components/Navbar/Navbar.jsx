import styled from "@emotion/styled";
import { Logout } from "@mui/icons-material";
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { AppBar, Avatar, Box, InputBase, Toolbar, Typography,Menu,Tooltip,IconButton,MenuItem,Divider,ListItemIcon } from "@mui/material";

import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search=styled("div")(({theme})=>({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius:theme.shape.borderRadius,
    width:"30%"
}))
const Icons=styled(Box)(({theme})=>({
    display:"flex",
    gap:"20px",
    alignItems:"center"
  
}))
export const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = anchorEl;
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <>
      <AppBar position="sticky">
        <StyledToolbar>
        <Box sx={{display:"flex"}}>
        <ElectricBoltIcon />
          <Typography sx={{display:{xs:"none",sm:"block"}}} variant="h6">
            Buzz
          </Typography>
        </Box>
         <Search><InputBase placeholder="search..."/></Search>
         <Icons>
            <DarkModeIcon/>
            <Tooltip title="Account settings">
            <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{width:"40px",height:"40px"}} src="https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp"/> 
            </IconButton>
            </Tooltip>
             
         </Icons>


        </StyledToolbar>
        
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar src="https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp" /> Profile
        </MenuItem>
       
        <Divider />
        
        
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      </AppBar>
    </>
  );
};
