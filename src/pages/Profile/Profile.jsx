import { useParams } from "react-router-dom"
import "./Profile.module.css"
import { useDataContext } from "../../contexts/DataContext";
import { Box, Paper,Avatar, Button,Typography  } from "@mui/material";

export const Profile = () => {
  const {users,allPosts}=useDataContext()
  const {userId}=useParams();
 
  const userData=users.find(({_id})=>_id===userId);


  //number of posts by user
  const postByUser= allPosts.filter(data=>data?.username===userData?.username); 
  return (
   <Box>
    <Paper sx={{display:"flex",width:"480px",minHeight:"150px",padding:"10px"}} elevation={3} >
      <Box sx={{width:"15%"}}> <Avatar sx={{ width: 65, height: 65 }} src={userData?.profileAvatar} /></Box>
      <Box p={1} sx={{color:"grey",display:"flex",flexDirection:"column",width:"85%"}}>
        <Box className="userProfile-header"  sx={{display:"flex",justifyContent:"space-between"}}>
          <Box sx={{display:"flex",flexDirection:"column",}}>
            <Box  sx={{color:"black", fontWeight: 500,fontSize:"1.25rem"}}>{userData?.firstName} {userData?.lastName}</Box>
            <Box>@{userData?.username} </Box>
          </Box>
          <Button variant="outlined">Edit</Button>

        </Box>
        <Box mt={1} className="userProfile-body">
          <Box>{userData?.bio}</Box>
          <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <Box>{userData?.website}</Box>
            <Box mt={1} >{new Date(userData?.createdAt)
          .toDateString()
          .split(" ")
          .slice(1, 4)
          .join(" ")}</Box>
          </Box>
        </Box>
        <Box mt={2} sx={{display:"flex",justifyContent:"space-between"}} className="userProfile-footer">
        <Typography  sx={{ color:"black",fontWeight: 500,fontSize:"1rem"}}>{postByUser.length} Posts</Typography>
        <Typography  sx={{ color:"black",fontWeight: 500,fontSize:"1rem"}}>{userData?.followers.length} Followers</Typography>
        <Typography  sx={{ color:"black",fontWeight: 500,fontSize:"1rem"}}> {userData?.following.length} Following </Typography>
          
        </Box>
      </Box>
    </Paper>
   </Box>
  )
}
