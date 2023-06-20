import { Box, Button, Typography, Modal,styled, Avatar, TextField, Stack } from "@mui/material";
import ImageIcon from '@mui/icons-material/Image';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import React from "react";
import { useState } from "react";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
   gap:"10px",
   marginTop:"10px",
   marginBottom:"20px"
  });
  

export const AddPostModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button variant="contained" onClick={() => setOpen((prev) => !prev)}>
        Post
      </Button>
      <StyledModal open={open} onClose={() => setOpen((prev) => !prev)}>
        <Box width={400} height={210} bgcolor={"background.default"} color={"text.default"} p={3} borderRadius={5}>
          <Typography variant="h6" color="gray" textAlign="center" component="h2">
            Create a Post
          </Typography>
          <UserBox>
            <Avatar sx={{width:30,height:30}}/>
            <Typography fontWeight={500} variant="span">John Doe</Typography>
          </UserBox>
          <TextField
          sx={{width:"100%"}}
          id="standard-multiline-static"
          placeholder="What's on your Mind"
          multiline
          rows={3}
          variant="standard"
        />
        <Stack direction="row" mt={2} gap={3} sx={{justifyContent:"space-between"}}>
          <Box >
          <ImageIcon sx={{color:"gray"}}   />
           <EmojiEmotionsIcon  sx={{marginLeft:"10px",color:"gray"}}/>

          </Box>
          <Button variant="contained">Post</Button>
        </Stack>
        </Box>
      </StyledModal>
    </div>
  );
};
