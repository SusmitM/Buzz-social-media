import { Avatar, Box, Paper, Typography, useTheme } from "@mui/material";
import { useDataContext } from "../../contexts/DataContext";

export const CommentCard = ({data,username}) => {

    const theme =useTheme();
    const {users}=useDataContext();
    console.log(data)
    const postOwner = users?.find((userData) => userData.username === username);
    const commentOwner = users?.find((userData) => userData.username === data?.username);
    
    
    
  return (
    <Paper sx={{ display: "flex",width: { xs: 350, sm: 550 } }}>
      <Box  sx={{
              display: "flex",
              justifyContent: "center",
              
            }} flex={1}>
        <Avatar  src={commentOwner?.profileAvatar} sx={{ height: "50px", width: "50px" }} />
      </Box>
      <Box flex={4}>
        <Box sx={{ display: "flex",flexDirection:"column"}}>
          <Box sx={{ display: "flex",alignItems:"baseline"}}>
          <Typography sx={{ fontSize: "1rem", fontWeight: 450 }}>
          {commentOwner?.firstName} {commentOwner?.lastName}
          </Typography>
          <Typography sx={{ fontSize: "0.9rem" }}>@{commentOwner?.username}</Typography>
          </Box>
          <Typography sx={{ fontSize: "0.9rem" }}>Replying To @{postOwner?.username}</Typography>

          <Typography
          variant="subtitle2"
            sx={{ textAlign: "left" }}
            color={theme.palette.mode === "dark" ? "white" : "black"}
          >
           {data?.text}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};