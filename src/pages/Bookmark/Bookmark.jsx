import { Box, Typography } from "@mui/material";
import { useDataContext } from "../../contexts/DataContext";
import { PostCard } from "../../components/PostCard/PostCard";

function Bookmark() {
  const { allPosts, bookmarkedPost } = useDataContext();


  const showBookmarkedPosts = allPosts?.filter(({ _id }) =>
    bookmarkedPost?.find((data) => data._id === _id)
  );
  
 

  return (
    <>
      <Box>
        
        {showBookmarkedPosts?.length === 0 && (
          <Typography variant="h4">No Bookmarked Post!!</Typography>
        )}
        {showBookmarkedPosts?.length > 0 &&
          showBookmarkedPosts?.map((data) => {
            return <PostCard key={data.id} data={data} />
          })}
      </Box>
    </>
  );
};

export default Bookmark;