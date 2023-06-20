import {
  Avatar,
  Box,
  Grid,
  List,
  ListItemAvatar,
  ListItemText,
  Typography,
  ListItem,
  IconButton,
  Button,
} from "@mui/material";
import styled from "@emotion/styled";
import AddIcon from "@mui/icons-material/Add";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));



export const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "flex" },justifyContent:"center" }}>
      <Box position="fixed" width={300}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Suggestions for you
          </Typography>
          <Demo>
            <List>
              <ListItem
                sx={{
                  display: "flex",
                  maxWidth: "300px",
                  flexDirection: { sm: "column", md: "row" },
                  boxShadow: 1,
                  gap: 1,
                  marginBottom:"10px",
                  justifyContent:"space-between"
                }}
              >
                <ListItemAvatar>
                  <Avatar src="https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp" />
                </ListItemAvatar>

                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Box>JohnDoe</Box>
                  <Box>@John</Box>
                </Box>

                <Button variant="contained" sx={{borderRadius:"18px",fontWeight:300, padding:"5px",fontSize:"0.9rem",textTransform:"none"}}>
                  {" "}
                  <AddIcon />
                  Follow
                </Button>
              </ListItem>
             
             
            </List>
          </Demo>
        </Grid>
      </Box>
    </Box>
  );
};
