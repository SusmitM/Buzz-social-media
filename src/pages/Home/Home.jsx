import "./Home.module.css";

import { Box,Tabs } from "@mui/material";
import Tab from "@mui/material/Tab";

import { PostCard } from "../../components/PostCard/PostCard";
import { useState } from "react";
import { useDataContext } from "../../contexts/DataContext";

export const Home = () => {
  const {allPosts}=useDataContext();

//post sorted acc to time of upload
  const latestPosts = [...allPosts]?.sort(
    (a, b) =>
      new Date(b.createdAt).getTime() / 1000 -
      new Date(a.createdAt).getTime() / 1000
  );
//post sorted acc to time of upload
  const trendingPosts = [...allPosts]?.sort(
     (a, b) =>
       b.likes.likeCount -
       a.likes.likeCount
    );

  const [value, setValue] = useState(0);
  // sorted posts to display
  const sortedPosts=value===0 ? latestPosts: trendingPosts ;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   <Box>
     <Box sx={{ width: '100%',display: "flex",
    justifyContent: "center"}}>
      
      <Box sx={{ width: '100%'}}>
      <Tabs value={value} onChange={handleChange} variant="fullWidth">
        <Tab label="Latest Posts" />
        <Tab label="Trending Posts" />
       
      </Tabs>
    </Box>
   
      </Box>
      <Box>
        {sortedPosts?.map((data) => (
          <PostCard key={data.id} data={data} />
        ))}
      </Box>
   </Box>
    
  );
};
