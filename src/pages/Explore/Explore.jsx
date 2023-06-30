import { Typography, Box } from "@mui/material";
import { useDataContext } from "../../contexts/DataContext";
import { PostCard } from "../../components/PostCard/PostCard";

export const Explore = () => {
  const { allPosts } = useDataContext();

  return (
    <Box >
     
      <Box>
        {allPosts?.map((data) => (
          <PostCard key={data.id} data={data} />
        ))}
      </Box>
    </Box>
  );
};
