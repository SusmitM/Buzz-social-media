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
  MenuItem
} from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useAuthContext } from "../contexts/AuthContext";
import { LoadingButton } from "@mui/lab";
import { useDataContext } from "../contexts/DataContext";


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

export const AddCommentModal=({editing,postId})=>{
  console.log(editing)
  const {addComment}=useDataContext();
  const {userData}=useAuthContext();
  const[commentData,setCommentData]=useState("");


  const [open,setOpen]=useState(false);

  const theme=useTheme();

  const handleClose = () => {
    setOpen(false);
    setCommentData("")
  };
  const openModal = () => {
    setOpen(true);
  };
  const submitComment=()=>{
    addComment(postId,commentData);
    handleClose();
  }


    return(
      <div>
        {editing ?<MenuItem
        onClick={() => {
          openModal();
        }}
      >
        Edit
      </MenuItem> :<IconButton aria-label="chat" onClick={() => {
          openModal();
        }}>
            <ChatBubbleOutlineIcon />
          </IconButton>
      }
       <StyledModal open={open} onClose={handleClose}>
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
            Add a Comment
          </Typography>
          <UserBox>
            <Avatar sx={{ width: 30, height: 30 }} src={userData?.user.profileAvatar} />
            <Typography color={theme.palette.mode === "dark" ? "white" : "black"}  fontWeight={500} variant="span">
              {userData?.user.firstName}{" "} {userData?.user.lastName}
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="commentField"
            placeholder="Add a comment"
            multiline
            rows={3}
            variant="standard"
            value={commentData}
            onChange={(e)=>setCommentData(e.target.value)}
          />
          <Box mt={1} sx={{display:"flex",justifyContent:"flex-end"}}>
          <Button
              disabled={commentData?.length===0?true : false}
              size="small"
              variant="contained"
              onClick={submitComment}
            >
              <span>Comment</span>
            </Button>
          </Box>
          </Box>
          </StyledModal>

        
        
        </div>
        
    )
}