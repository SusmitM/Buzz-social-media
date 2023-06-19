import { Box } from "@mui/material";
import { PostCard } from "../PostCard/PostCard";

export const Feed = () => {
  return (
    <Box flex={6} p={{ xs: 0, md: 2 }} sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      {PostCard()}
      {PostCard()}
      {PostCard()}
      {PostCard()}
      {PostCard()}
      {PostCard()}
    </Box>
  );
};
