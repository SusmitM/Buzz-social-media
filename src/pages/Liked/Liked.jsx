import { Box, Typography } from "@mui/material";
import "./Liked.module.css";
import { useAuthContext } from "../../contexts/AuthContext";
import { useDataContext } from "../../contexts/DataContext";
import { PostCard } from "../../components/PostCard/PostCard";
export const Liked = () => {
  const { userData } = useAuthContext();
  const { allPosts } = useDataContext();
  const likedPost = allPosts?.filter(({ likes }) =>
    likes.likedBy.find(({ _id }) => _id === userData?.user?._id)
  );
  
 
  return (
    <>
      <Box>
        {likedPost?.length === 0 && (
          <Typography variant="h4">No Liked Post!!</Typography>
        )}
        {likedPost?.length > 0 &&
          likedPost?.map((data) => {
            return <PostCard key={data.id} data={data} />
          })}
      </Box>
    </>
  );
};
