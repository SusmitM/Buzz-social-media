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
  useTheme,
  IconButton,
  BottomNavigationAction
} from "@mui/material";

import { toast } from "react-toastify";
import EmojiPicker from "emoji-picker-react";
import ImageIcon from "@mui/icons-material/Image";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { useDataContext } from "../../contexts/DataContext";
import { useAuthContext } from "../../contexts/AuthContext";
import { uploadMedia } from "../../services/Data/uploadMedia";
import { LoadingButton } from "@mui/lab";

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

export const AddPostModal = (mobileView) => {
  const {userData}=useAuthContext();
  const { makePost} = useDataContext();

  const [open,setOpen]=useState(false);
  const theme = useTheme();
 

  const [postDetails, setPostDetails] = useState({ content: "", mediaURL: "" });
   // state to hold the input media
   const [media, setMedia] = useState(null);

   //state for the button
   const [loading, setLoading] = useState(false);

  const updateContent = (text) => {

    setPostDetails((prev) => ({ ...prev, content: text }));
  };
  // state to show emoji box
  const [showEmojiBox,setShowEmojiBox]=useState(false);

   const emojiClickHandler = (emojiObj) => {
    const emoji = emojiObj.emoji;
    const updatedContent = postDetails?.content + emoji;
    updateContent(updatedContent);
    setShowEmojiBox(false);
  };

  const submitPost = async() => {

    setLoading(true);
    setShowEmojiBox(false);
    try{
      if (media) {
        const data = new FormData();
        data.append("file", media);
        data.append("upload_preset", "Buzz-socialmedia");
        data.append("folder", "Buzz-socialmedia");
        const { secure_url } = await uploadMedia(data);
        makePost({ content: postDetails?.content, mediaURL: secure_url });
       
      } else {
        makePost(postDetails);
      }
    }
    catch(error){
      toast.error({error})
    }
    finally {
      setPostDetails({ content: "", mediaURL: "" });
      setMedia(null);
      setLoading(false);
      setOpen(false);

    }
  };

  const handleUploadClick = (event) => {
    var file = event.target.files[0];
    Math.round(file.size / 5242880) > 1
      ? toast.error("File size should not be more than 5Mb")
      : setMedia(file);
  };
  return (
    <div>
      {mobileView ?<BottomNavigationAction onClick={() => setOpen(true)}label="AddPost" value="AddPost" icon={<AddCircleIcon   />} /> :  <Button variant="contained" onClick={() => setOpen(true)}>
        Post
      </Button>}
     
      
      <StyledModal open={open} onClose={() => {setOpen(false);setShowEmojiBox(false);setPostDetails({ content: "", mediaURL: "" })}}>
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
            Create a Post
          </Typography>
          <UserBox>
            <Avatar sx={{ width: 30, height: 30 }} src={userData?.user.profileAvatar} />
            <Typography color={theme.palette.mode === "dark" ? "white" : "black"}  fontWeight={500} variant="span">
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

          {media && (
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
                onClick={() => setMedia(null)}
              >
                <CloseIcon />
              </IconButton>
              <Box mt={1}>
            {
            media?.type?.split("/")[0] === "image" ? (
              <img
                src={URL.createObjectURL(media)}
                alt="Post-pic"
                style={{height:"200px",width:"150px"}}
              />
            ) :  media?.type?.split("/")[0] === "video" ?  <video alt="Post-video" style={{height:"200px",width:"150px"}}>
                
            <source src={URL.createObjectURL(media)} />
  
        </video>:<span></span>
             
           }
            </Box>
            </Box>
          )}


          <Stack direction="row" mt={2} gap={3} sx={{ justifyContent: "space-between" }}>
            <Box>
            <input
                style={{ display: "none" }}
                id="addPostModalImg"
                multiple
                type="file"
                onChange={(event) => handleUploadClick(event)}
              />
              <label htmlFor="addPostModalImg">
                <ImageIcon sx={{ color: "gray" }} />
              </label>

              <EmojiEmotionsIcon onClick={()=>setShowEmojiBox(prev=>!prev)} sx={{ marginLeft: "10px", color: "gray" }} />
            </Box>
            <LoadingButton
              disabled={postDetails?.content.length === 0 ? true : false}
              size="small"
              onClick={submitPost}
              loading={loading}
              loadingPosition="center"
              variant="contained"
            >
              <span>Post</span>
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
    </div>
  );
};
