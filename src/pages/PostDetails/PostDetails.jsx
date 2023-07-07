import { useParams } from "react-router-dom"
import "./PostDetails.module.css"
import { useDataContext } from "../../contexts/DataContext";
import { PostCard } from "../../components/PostCard/PostCard";
import { Box } from "@mui/material";
import { CommentCard } from "../../components/CommentCard/CommentCard";

export const PostDetails = () => {
  const {allPosts}=useDataContext();
  const {postId}=useParams();
  
  const selectedPost=allPosts.find(data=>data?._id===postId);
  console.log(selectedPost)

  return (   
   
     <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box><PostCard data={selectedPost} /></Box>
      <Box>
      {selectedPost?.comments?.map((data) => (
          <CommentCard key={data.id} username={selectedPost?.username} data={data} />
        ))}
      </Box>
       
    </Box>
    
    
    
    
    
    

     
    
  )
}
