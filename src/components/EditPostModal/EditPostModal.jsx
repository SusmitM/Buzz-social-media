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
  MenuItem
} from "@mui/material";
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

  const handleClose = () => {
    setOpenEditPost(false);
    setEditPostData(data);
  };
  const openModal = () => {
    setOpenEditPost(true);
  };
  const editHandler=()=>{
    console.log(editPostData)
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
            <Typography fontWeight={500} variant="span">
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
              <EmojiEmotionsIcon sx={{ marginLeft: "10px", color: "gray" }} />
            </Box>
             <Button variant="contained" disabled={editPostData?.content ? false: true} onClick={editHandler}>
              Edit
            </Button>
            
          </Stack>
        </Box>
      </StyledModal>
    </>
  );
};
