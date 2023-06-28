import { Box, Typography } from "@mui/material";
import { useDataContext } from "../../contexts/DataContext";
import "./Bookmark.module.css";
import { PostCard } from "../../components/PostCard/PostCard";

export const Bookmark = () => {
  const { allPosts, bookmarkedPost } = useDataContext();

  const showBookmarkedPosts = allPosts?.filter(({ _id }) =>
    bookmarkedPost?.find((data) => data._id === _id)
  );
 

  return (
    <>
      <Box height="100%">
        {showBookmarkedPosts?.length === 0 && (
          <Typography variant="h4">No Bookmarked Post!!</Typography>
        )}
        {showBookmarkedPosts?.length > 0 &&
          showBookmarkedPosts?.map((data) => {
            return PostCard(data);
          })}
      </Box>
    </>
  );
};
