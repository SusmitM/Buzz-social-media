import { Box } from "@mui/material";
import { PostCard } from "../PostCard/PostCard";

export const Feed = () => {
  return (
    <Box>
      {PostCard()}
      {PostCard()}
      {PostCard()}
      {PostCard()}
      {PostCard()}
      {PostCard()}
    </Box>
  );
};
