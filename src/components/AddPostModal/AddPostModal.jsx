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
  const { makePost} = useDataContext();

  const [open,setOpen]=useState(false);

  const [postDetails, setPostDetails] = useState({ content: "", mediaURL: "" });

  const updateContent = (text) => {
    setPostDetails((prev) => ({ ...prev, content: text }));
  };

  const submitPost = () => {
    makePost(postDetails);
    setPostDetails({ content: "", mediaURL: "" });
    setOpen(false);
  };
  return (
    <div>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Post
      </Button>
      
      <StyledModal open={open} onClose={() => {setOpen(false);setPostDetails({ content: "", mediaURL: "" })}}>
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
            Create a Post
          </Typography>
          <UserBox>
            <Avatar sx={{ width: 30, height: 30 }} src={userData?.user.profileAvatar} />
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
            <Button variant="contained" disabled={postDetails.content?.length > 0 ? false : true} onClick={submitPost}>
              Post
            </Button>
            
          </Stack>
        </Box>
      </StyledModal>
    </div>
  );
};
