import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  styled,
  Avatar,
  TextField,
  Stack,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { useDataContext } from "../../contexts/DataContext";
import { useAuthContext } from "../../contexts/AuthContext";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginTop: "10px",
  marginBottom: "20px",
});

export const AddPostModal = ({postData}) => {
  const {userData}=useAuthContext();
  const { makePost,open,setOpen,editing,setEditing,editPost } = useDataContext();


  const [postDetails, setPostDetails] = useState(postData ?{content:postData?.content,mediaURL:postData?.mediaURL } :{ content: "", mediaURL: "" });

  const updateContent = (text) => {
    setPostDetails((prev) => ({ ...prev, content: text }));
  };

  const submitPost = () => {
    makePost(postDetails);
    setPostDetails({ content: "", mediaURL: "" });
    setOpen(false);
  };

  const editHandler=()=>{
    editPost(postDetails,postData._id)
    setOpen(false);
    setEditing (false);
    setPostDetails({ content: "", mediaURL: "" });
    postData="";

  }
  
 

  return (
    <div>
      
      <StyledModal open={open} onClose={() => {setOpen((prev) => !prev);setEditing (false)}}>
        <Box
          width={400}
          height={210}
          bgcolor={"background.default"}
          color={"text.default"}
          p={3}
          borderRadius={5}
        >
          <Typography
            variant="h6"
            color="gray"
            textAlign="center"
            component="h2"
          >
           {editing ? "Edit the Post": "Create a Post"}
          </Typography>
          <UserBox>
            <Avatar sx={{ width: 30, height: 30 }} />
            <Typography fontWeight={500} variant="span">
              {userData?.user.firstName}{" "} {userData?.user.lastName}
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            placeholder="What's on your Mind"
            multiline
            rows={3}
            variant="standard"
            value={postDetails?.content}
            onChange={(e) => updateContent(e.target.value)}
          />
          <Stack direction="row" mt={2} gap={3} sx={{ justifyContent: "space-between" }}>
            <Box>
              <ImageIcon sx={{ color: "gray" }} />
              <EmojiEmotionsIcon sx={{ marginLeft: "10px", color: "gray" }} />
            </Box>
            {editing ? <Button variant="contained" disabled={postDetails.content?.length > 0 ? false : true} onClick={editHandler}>
              Edit
            </Button>: <Button variant="contained" disabled={postDetails.content?.length > 0 ? false : true} onClick={submitPost}>
              Post
            </Button>}
            
          </Stack>
        </Box>
      </StyledModal>
    </div>
  );
};
