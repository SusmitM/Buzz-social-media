import {
  Box,
  Tabs,
  Divider,
  Tab,
  Button,
  Typography,
  Modal,
  styled,
  Avatar,
  TextField,
  Stack,
  Paper,
  Fab,
  Chip,
  Dialog,
  DialogTitle,
  IconButton,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { toast } from "react-toastify";
import EmojiPicker from "emoji-picker-react";
import ImageIcon from "@mui/icons-material/Image";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CloseIcon from "@mui/icons-material/Close";

import { PostCard } from "../../components/PostCard/PostCard";
import { useState } from "react";
import { useDataContext } from "../../contexts/DataContext";
import { useAuthContext } from "../../contexts/AuthContext";
import { uploadMedia } from "../../services/Data/uploadMedia";
import { LoadingButton } from "@mui/lab";

const StyledModal = styled(Paper)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "15px",
  marginTop: "1.25rem",
  boxShadow: 3,
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});
function Home() {
  const { allPosts, makePost } = useDataContext();
  const { userData } = useAuthContext();

  // state to show emoji box
  const [showEmojiBox, setShowEmojiBox] = useState(false);

  // state for post values
  const [postDetails, setPostDetails] = useState({ content: "", mediaURL: "" });

  // state to hold the input media
  const [media, setMedia] = useState(null);

  //state for the button
  const [loading, setLoading] = useState(false);

  const updateContent = (text) => {
    setPostDetails((prev) => ({ ...prev, content: text }));
  };
  const emojiClickHandler = (emojiObj) => {
    const emoji = emojiObj.emoji;
    const updatedContent = postDetails?.content + emoji;
    updateContent(updatedContent);
    setShowEmojiBox(false);
  };

  const submitPost = async () => {
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
    }
    
    
  };

  const handleUploadClick = (event) => {
    var file = event.target.files[0];
    Math.round(file.size / 5242880) > 1
      ? toast.error("File size should not be more than 5Mb")
      : setMedia(file);
  };

  // post that are by the logged user or the person been followed
  const selectedPosts = allPosts?.filter(
    ({ username }) =>
      username === userData?.user.username ||
      userData?.user.following.find((data) => data?.username === username)
  );

  //post sorted acc to time of upload
  const latestPosts = [...selectedPosts]?.sort(
    (a, b) =>
      new Date(b.createdAt).getTime() / 1000 -
      new Date(a.createdAt).getTime() / 1000
  );
  //post sorted acc to time of upload
  const trendingPosts = [...selectedPosts]?.sort(
    (a, b) => b.likes.likeCount - a.likes.likeCount
  );

  const [value, setValue] = useState(0);
  // sorted posts to display
  const sortedPosts = value === 0 ? latestPosts : trendingPosts;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "100%" }}>
          <Tabs value={value} onChange={handleChange} variant="fullWidth">
            <Tab
              icon={<AutoAwesomeIcon />}
              iconPosition="start"
              label="Latest Posts"
            />
            <Tab
              icon={<LocalFireDepartmentIcon />}
              iconPosition="start"
              label="Trending Posts"
            />
          </Tabs>
        </Box>
      </Box>
      <Divider variant="fullWidth" />
      <StyledModal elevation={2}>
        <Box
          width={600}
          bgcolor={"background.default"}
          color={"text.default"}
          p={2}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          <UserBox>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src={userData?.user.profileAvatar}
            />
            <Typography fontWeight={500} variant="span">
              {userData?.user.firstName} {userData?.user.lastName}
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            placeholder="What's on your Mind?!"
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

          <Stack
            direction="row"
            mt={2}
            gap={3}
            sx={{ justifyContent: "space-between" }}
          >
            <Box>
              <input
                style={{ display: "none" }}
                id="contained-button-file"
                multiple
                type="file"
                onChange={(event) => handleUploadClick(event)}
              />
              <label htmlFor="contained-button-file">
                <ImageIcon sx={{ color: "gray" }} />
              </label>

              <EmojiEmotionsIcon
                onClick={() => setShowEmojiBox((prev) => !prev)}
                sx={{ marginLeft: "10px", color: "gray" }}
              />
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
          </Stack>
          {showEmojiBox && (
            <Box sx={{ zIndex: 1, position: "absolute" }}>
              <EmojiPicker
                width={300}
                height={400}
                onEmojiClick={emojiClickHandler}
              />
            </Box>
          )}
        </Box>
      </StyledModal>
      <Divider variant="fullWidth" />
      {sortedPosts?.length === 0 && (
        <Typography variant="h4">No Posts To Show...</Typography>
      )}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {sortedPosts?.map((data) => (
          <PostCard key={data.id} data={data} />
        ))}
      </Box>
    </Box>
  );
};

export default Home;