import { Avatar, Badge, Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useDataContext } from "../../contexts/DataContext";
import { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { AvatarModal } from "../AvatarModal/AvatarModal";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    backgroundColor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
   
  };

export const EditProfileModal = () => {
    const {userData,editProfile}=useAuthContext();
    const {dataDispatch}=useDataContext();
   // state for edit profile modal
  const [openEditProfile, setOpenEditProfile] = useState(false);

  const [updatedProfileData,setUpdatedProfileData]=useState(userData.user)
    
      const handleClose = () =>{
        setOpenEditProfile(false);
        setUpdatedProfileData(userData.user)

      } 
      const openModal=()=>{ setOpenEditProfile(true)};
      const handelEdit= async()=>{
      const result= await editProfile(updatedProfileData)
      dataDispatch({
         type: "updateUserData",
          userData: result,
        });
        handleClose()
    }
  return (
   <>
   
    <Button variant="outlined" onClick={()=>openModal()}>Edit</Button>
    <Modal
        open={openEditProfile}
        onClose={handleClose}
      >
        <Box sx={style}>
            <Box component="form" sx={{textAlign:"center"}}>
            <Typography variant="h5" fontWeight={600}>Edit Profile</Typography>
           <Box  sx={{display:"flex",justifyContent:"space-around"}}>
           <Box sx={{width:"15%"}}>
           <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          < AvatarModal setUpdatedProfileData={setUpdatedProfileData}/>
        }
      >
        <Avatar sx={{ width: 75, height: 75 }} src={updatedProfileData?.profileAvatar} />
      </Badge>
             </Box>
           </Box>
           <Box  sx={{display:"flex",justifyContent:"space-around"}}>
            
            <TextField
          sx={{marginTop:"10px"}}
          size="small"
          halfWidth
          id="firstName"
          name="firstName"
          type="text"
          autoFocus
          label="First Name"
          value={updatedProfileData?.firstName}
          onChange={(e)=>setUpdatedProfileData(prev=>({...prev,firstName:e.target.value}))}
        />
          
           </Box>
           <Box  sx={{display:"flex",justifyContent:"space-around"}}>
           
            <TextField
          sx={{marginTop:"10px"}}
          size="small"
          halfWidth
          id="lastName"
          name="lastName"
          type="text"
          autoFocus
          label="Last Name"
          value={updatedProfileData?.lastName}
          onChange={(e)=>setUpdatedProfileData(prev=>({...prev,lastName:e.target.value}))}
        />
          
           </Box>
           <Box  sx={{display:"flex",justifyContent:"space-around"}}>
           
            <TextField
          sx={{marginTop:"10px"}}
          size="small"
          halfWidth
          id="bio"
          name="bio"
          type="text"
          autoFocus
          label="Bio"
          value={updatedProfileData?.bio}
          onChange={(e)=>setUpdatedProfileData(prev=>({...prev,bio:e.target.value}))}
        />
        
           </Box>
           <Box  sx={{display:"flex",justifyContent:"space-around"}}>

            <TextField
          sx={{marginTop:"10px"}}
          size="small"
          halfWidth
          id="website"
          name="website"
          type="text"
          autoFocus
          label="Website"
          value={updatedProfileData?.website}
          onChange={(e)=>setUpdatedProfileData(prev=>({...prev,website:e.target.value}))}
        />
        
           </Box>
           <Button
         onClick={handelEdit}
          halfWidth
          variant="contained"
          sx={{ mt: 3, mb: 1 }}
        >
         Edit
        </Button>
            </Box>
          
        </Box>
      </Modal>
   </>
  )
}
