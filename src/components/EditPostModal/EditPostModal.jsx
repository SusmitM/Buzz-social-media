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
  useTheme,
  IconButton
} from "@mui/material";
import { toast } from "react-toastify";
import EmojiPicker from "emoji-picker-react";
import ImageIcon from "@mui/icons-material/Image";
import CloseIcon from "@mui/icons-material/Close";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

import { useDataContext } from "../../contexts/DataContext";
import { LoadingButton } from "@mui/lab";
import { uploadMedia } from "../../services/Data/uploadMedia";

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

   // state to hold the input media
   const [media, setMedia] = useState(null);
   //state for the button
   const [loading, setLoading] = useState(false);

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
  const editHandler=async()=>{
    
    
    try{
      setLoading(true);
      if (media) {
        const data = new FormData();
        data.append("file", media);
        data.append("upload_preset", "Buzz-socialmedia");
        data.append("folder", "Buzz-socialmedia");
        const { secure_url } = await uploadMedia(data);
        editPost({ ...editPostData, mediaURL: secure_url },editPostData._id);
       
      } else {
        editPost(editPostData,editPostData._id)
      }
    }
    catch(error){
      toast.error({error})
    }
    finally {
    setMedia(null);
    handleClose();
    setLoading(false);
    setShowEmojiBox(false);

    }
    
  
  }
  const handleUploadClick = (event) => {
    setMedia(null);
    setEditPostData(prev=>({...prev,mediaURL:""}))

    var file = event.target.files[0];
    Math.round(file.size / 5242880) > 1
      ? toast.error("File size should not be more than 5Mb")
      : setMedia(file);
  };


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
          width={500}
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
          {
          (media || editPostData?.mediaURL)  && (
            <Box mt={1}>
              <IconButton
                sx={{
                  position: "absolute",
                  color: "white",
                  backgroundColor: "black",
                  padding: "1px",
                  zIndex:1
                }}
                aria-label="close"
                onClick={() => {setMedia(null);setEditPostData(prev=>({...prev,mediaURL:""}))}}
              >
                <CloseIcon />
              </IconButton>
              <Box mt={1}>
                {
                  editPostData?.mediaURL?.split("/")[4] === "image" ||
                  media?.type?.split("/")[0] === "image" ? 
                  <img style={{height:"200px",width:"150px"}}
                src={media ? URL.createObjectURL(media) : editPostData?.mediaURL}
                alt="Post-pic"
              />
                  :
                  editPostData?.mediaURL?.split("/")[4] === "video" ||
                  media?.type?.split("/")[0] === "video" ? (
                  <video style={{height:"200px",width:"150px"}} alt="Post-video">
                    {media ? (
                      <source  src={URL.createObjectURL(media)} />
                    ) : (
                      <source  src={editPostData?.mediaURL} />
                    )}
                  </video>
                ) : null
                }
            
            </Box>
            </Box>
          )}

          <Stack direction="row" mt={2} gap={3} sx={{ justifyContent: "space-between" }}>
            <Box>
            <input
                style={{ display: "none" }}
                id="editPostModalImg"
                multiple
                type="file"
                onChange={(event) => handleUploadClick(event)}
              />
              <label htmlFor="editPostModalImg">
                <ImageIcon sx={{ color: "gray" }} />
              </label>
              <EmojiEmotionsIcon onClick={()=>setShowEmojiBox(prev=>!prev)} sx={{ marginLeft: "10px", color: "gray" }} />
            </Box>
            <LoadingButton
              disabled={editPostData?.content ? false: true}
              size="small"
              onClick={editHandler}
              loading={loading}
              loadingPosition="center"
              variant="contained"
            >
              <span>Edit</span>
            </LoadingButton>
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
