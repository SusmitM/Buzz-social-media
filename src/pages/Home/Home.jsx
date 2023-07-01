

import { Box,Tabs,Divider, Tab,  Button,
  Typography,
  Modal,
  styled,
  Avatar,
  TextField,
  Stack,
  Paper } from "@mui/material";
  import ImageIcon from "@mui/icons-material/Image";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { PostCard } from "../../components/PostCard/PostCard";
import { useState } from "react";
import { useDataContext } from "../../contexts/DataContext";
import { useAuthContext } from "../../contexts/AuthContext";

const StyledModal = styled(Paper)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius:"15px",
  marginTop:"1.25rem",
  boxShadow:3

  
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});
export const Home = () => {
  const {allPosts, makePost}=useDataContext();
  const {userData}=useAuthContext();
// state for post values
const [postDetails, setPostDetails] = useState({ content: "", mediaURL: "" });

const updateContent = (text) => {
  setPostDetails((prev) => ({ ...prev, content: text }));
};

const submitPost = () => {
  makePost(postDetails);
  setPostDetails({ content: "", mediaURL: "" });
  
};
  
// post that are by the logged user or the person been followed
  const selectedPosts=allPosts?.filter(({username})=>username===userData?.user.username || userData?.user.following.find((data)=>data?.username===username));

//post sorted acc to time of upload
  const latestPosts = [...selectedPosts]?.sort(
    (a, b) =>
      new Date(b.createdAt).getTime() / 1000 -
      new Date(a.createdAt).getTime() / 1000
  );
//post sorted acc to time of upload
  const trendingPosts = [...selectedPosts]?.sort(
     (a, b) =>
       b.likes.likeCount -
       a.likes.likeCount
    );

  const [value, setValue] = useState(0);
  // sorted posts to display
  const sortedPosts=value===0 ? latestPosts: trendingPosts ;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   <Box>
     <Box sx={{ width: '100%',display: "flex",
    justifyContent: "center"}}>
      
      <Box sx={{ width: '100%'}}>
      <Tabs value={value} onChange={handleChange} variant="fullWidth">
        <Tab  icon={<AutoAwesomeIcon/>} iconPosition="start" label="Latest Posts" />
        <Tab  icon={<LocalFireDepartmentIcon/>} iconPosition="start" label="Trending Posts" />
       
      </Tabs>
    </Box>
   
      </Box>
      <Divider variant="fullWidth"/>
      <StyledModal elevation={2}>
        <Box
          width={450}
          height={165}
          bgcolor={"background.default"}
          color={"text.default"}
          p={2}
         
        >
          <UserBox>
            <Avatar sx={{ width: 30, height: 30 }} src={userData?.user.profileAvatar} />
            <Typography fontWeight={500} variant="span">
              {userData?.user.firstName}{" "} {userData?.user.lastName}
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
          <Stack direction="row" mt={2} gap={3} sx={{ justifyContent: "space-between" }}>
            <Box>
              <ImageIcon sx={{ color: "gray" }} />
              <EmojiEmotionsIcon sx={{ marginLeft: "10px", color: "gray" }} />
            </Box>
           <Button variant="contained" onClick={submitPost}>
              Post
            </Button>
            
          </Stack>
        </Box>
      </StyledModal>
      <Divider variant="fullWidth"/>

      <Box>
        {sortedPosts?.map((data) => (
          <PostCard key={data.id} data={data} />
        ))}
      </Box>
   </Box>
    
  );
};
