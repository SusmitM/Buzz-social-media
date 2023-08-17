import { Typography, Box } from "@mui/material";
import { useDataContext } from "../../contexts/DataContext";
import { PostCard } from "../../components/PostCard/PostCard";
import { useAuthContext } from "../../contexts/AuthContext";

function Explore() {
  const { allPosts } = useDataContext();
  const {userData}=useAuthContext();
 

  const postToDisplay=allPosts?.filter(data=>data?.username !==userData?.user?.username)
  
  return (
    <Box >
      {postToDisplay?.length === 0 && (
          <Typography variant="h4">No Posts To Show...</Typography>
        )}
      <Box>
        {postToDisplay?.map((data) => (
          <PostCard key={data.id} data={data} />
        ))}
      </Box>
    </Box>
  );
};

export default Explore;