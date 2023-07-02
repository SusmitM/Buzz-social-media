import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useState } from 'react';
import { Avatar, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign:"center"
};
export const AvatarModal = ({setUpdatedProfileData}) => {
 const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const avatarData=["https://res.cloudinary.com/dqlasoiaw/image/upload/v1687677608/tech-social/3d-illustration-person-with-sunglasses_23-2149436188_sazdtt.jpg","https://res.cloudinary.com/dqlasoiaw/image/upload/v1687677609/tech-social/merida-avatar-wodp_k7w5dp.png","https://res.cloudinary.com/dxnbnviuz/image/upload/v1687603602/socialMedia/AvatarTwo_isbynr.png","https://res.cloudinary.com/dxnbnviuz/image/upload/v1687603596/socialMedia/AvatarOne_a3knbz.png","https://i.ibb.co/4KNJz5D/avataaars-5.png","https://i.ibb.co/VTCJfQb/avataaars.png"]

  return (
    <div>
    <Button onClick={handleOpen}><CameraAltIcon/></Button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
      <Typography variant="h5" fontWeight={600}>Select an Avatar</Typography>
       <Box sx={{display:"flex",flexWrap:"wrap",marginTop:"20px"}}>
        {
             avatarData.map(avatar=><Avatar onClick={()=>{setUpdatedProfileData(prev=>({...prev,profileAvatar:avatar}));handleClose()}} sx={{ width: 90, height: 90,margin:"10px",cursor:"pointer" }} src={avatar} />)
        }
       </Box>
        
      </Box>
    </Modal>
  </div>
  )
}
