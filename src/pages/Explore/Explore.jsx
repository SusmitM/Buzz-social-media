import { Typography, Box } from "@mui/material";
import { useDataContext } from "../../contexts/DataContext";
import { PostCard } from "../../components/PostCard/PostCard";

export const Explore = () => {
  const { allPosts } = useDataContext();

  return (
    <>
      <Typography variant="h5">Explore</Typography>
      <Box>
        {allPosts?.map((data) => {
          return PostCard(data)
        })}
      </Box>
    </>
  );
};
