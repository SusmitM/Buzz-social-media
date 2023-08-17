import { useParams } from "react-router-dom"
import "./Profile.module.css"
import { useDataContext } from "../../contexts/DataContext";
import { Box, Paper,Avatar, Button,Typography, Link  } from "@mui/material";
import { PostCard } from "../../components/PostCard/PostCard";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useAuthContext } from "../../contexts/AuthContext";
import AddIcon from "@mui/icons-material/Add";
import { EditProfileModal } from "../../components/EditProfileModal/EditProfileModal";
function Profile() {
  const {users,allPosts,followUser,unfollowUser}=useDataContext()
  const { userData} = useAuthContext();
  const {userId}=useParams();
 
  const profileData=users.find(({_id})=>_id===userId);
  const followHandler=()=>{
    followUser(profileData?._id);
  }
  const unFollowHandler=()=>{
    unfollowUser(profileData?._id);
  }


  const actionBtn= userData.user._id===userId ? <EditProfileModal/>:(userData?.user.following.find(data=>data._id===profileData._id)?  <Button
 variant="outlined"
  onClick={()=>unFollowHandler()}
>
  {" "}
 
  Following
</Button> : <Button
           variant="outlined"
            onClick={()=>followHandler()}
          >
            {" "}
            <AddIcon />
            Follow
          </Button>);
  //number of posts by user
  const postByUser= allPosts.filter(data=>data?.username===profileData?.username); 
  return (
   <Box>
    <Paper sx={{display:"flex",width:"480px",minHeight:"150px",padding:"10px"}} elevation={3} >
      <Box sx={{width:"15%"}}> <Avatar sx={{ width: 65, height: 65 }} src={profileData?.profileAvatar} /></Box>
      <Box p={1} sx={{display:"flex",flexDirection:"column",width:"85%"}}>
        <Box className="userProfile-header"  sx={{display:"flex",justifyContent:"space-between"}}>
          <Box sx={{display:"flex",flexDirection:"column",}}>
            <Box  sx={{fontWeight: 500,fontSize:"1.25rem"}}>{profileData?.firstName} {profileData?.lastName}</Box>
            <Box sx={{color:"grey"}}>@{profileData?.username} </Box>
          </Box>
         {actionBtn}

        </Box>
        <Box mt={1} className="userProfile-body">
          <Box sx={{color:"grey"}}>{profileData?.bio}</Box>
          <Box mt={1} sx={{display:"flex",justifyContent:"space-between",color:"grey"}}>
            <Link href={profileData?.website} target="_blank" sx={{cursor:"pointer"}}>{profileData?.website}</Link>
            <Box sx={{display:"flex",alignItems:"center"}}><CalendarMonthIcon/>{new Date(profileData?.createdAt)
          .toDateString()
          .split(" ")
          .slice(1, 4)
          .join(" ")}</Box>
          </Box>
        </Box>
        <Box mt={2} sx={{display:"flex",justifyContent:"space-between"}} className="userProfile-footer">
        <Typography  sx={{fontWeight: 500,fontSize:"1rem"}}>{postByUser.length} Posts</Typography>
        <Typography  sx={{fontWeight: 500,fontSize:"1rem"}}>{profileData?.followers.length} Followers</Typography>
        <Typography  sx={{fontWeight: 500,fontSize:"1rem"}}> {profileData?.following.length} Following </Typography>
          
        </Box>
      </Box>
    </Paper>
    <Box mt={4}>
    {postByUser?.length > 0 &&
          postByUser?.map((data) => {
            return <PostCard key={data.id} data={data} />
          })}
    </Box>
   </Box>
  )
}

export default Profile;
