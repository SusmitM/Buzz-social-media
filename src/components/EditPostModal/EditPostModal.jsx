import{ useState } from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  styled,
  Avatar,
  TextField,
  Stack,
  MenuItem,
  useTheme
} from "@mui/material";
import EmojiPicker from "emoji-picker-react";
import ImageIcon from "@mui/icons-material/Image";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

import { useDataContext } from "../../contexts/DataContext";

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
  

export const EditPostModal = ({ postOwner, data }) => {
    const {editPost } = useDataContext();
    const [editPostData,setEditPostData]=useState(data);
  // state for edit profile modal
  const [openEditPost, setOpenEditPost] = useState(false);
  const theme = useTheme();

  // state to show emoji box
  const [showEmojiBox,setShowEmojiBox]=useState(false);

   const emojiClickHandler = (emojiObj) => {
    const emoji = emojiObj.emoji;
    const updatedContent = editPostData?.content + emoji;
    setEditPostData(prev=>({...prev,content:updatedContent}))

    setShowEmojiBox(false);
  };

  const handleClose = () => {
    setOpenEditPost(false);
    setEditPostData(data);
  };
  const openModal = () => {
    setOpenEditPost(true);
  };
  const editHandler=()=>{
    editPost(editPostData,editPostData._id)
    handleClose();
    
  
  }


  return (
    <>
      <MenuItem
        onClick={() => {
          openModal();
        }}
      >
        Edit
      </MenuItem>
      <StyledModal open={openEditPost} onClose={handleClose}>
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
            Edit the Post
          </Typography>
          <UserBox>
            <Avatar sx={{ width: 30, height: 30 }} src={postOwner?.profileAvatar} />
            <Typography color={theme.palette.mode === "dark" ? "white" : "black"} fontWeight={500} variant="span">
              {postOwner?.firstName}{" "} {postOwner?.lastName}
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            placeholder="What's on your Mind"
            multiline
            rows={3}
            variant="standard"
            value={editPostData?.content}
            onChange={(e) => setEditPostData(prev=>({...prev,content:e.target.value}))}
          />
          <Stack direction="row" mt={2} gap={3} sx={{ justifyContent: "space-between" }}>
            <Box>
              <ImageIcon sx={{ color: "gray" }} />
              <EmojiEmotionsIcon onClick={()=>setShowEmojiBox(prev=>!prev)} sx={{ marginLeft: "10px", color: "gray" }} />
            </Box>
             <Button variant="contained" disabled={editPostData?.content ? false: true} onClick={editHandler}>
              Edit
            </Button>
            {
          showEmojiBox &&
           <Box sx={{top:"10px",zIndex:1,position:"absolute"}}
           >
            <EmojiPicker 
              width={350}
              height={400}
              onEmojiClick={emojiClickHandler} />
          </Box>

          }
            
          </Stack>
        </Box>
      </StyledModal>
    </>
  );
};
