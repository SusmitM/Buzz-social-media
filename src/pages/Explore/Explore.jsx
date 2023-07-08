import { Typography, Box } from "@mui/material";
import { useDataContext } from "../../contexts/DataContext";
import { PostCard } from "../../components/PostCard/PostCard";

export const Explore = () => {
  const { allPosts } = useDataContext();
  console.log(allPosts)
  
  return (
    <Box >
      {allPosts?.length === 0 && (
          <Typography variant="h4">No Posts To Show...</Typography>
        )}
      <Box>
        {allPosts?.map((data) => (
          <PostCard key={data.id} data={data} />
        ))}
      </Box>
    </Box>
  );
};
