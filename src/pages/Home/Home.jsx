import "./Home.module.css";

import { Box,Tabs } from "@mui/material";
import Tab from "@mui/material/Tab";

import { PostCard } from "../../components/PostCard/PostCard";
import { useState } from "react";

export const Home = () => {
  const [value, setValue] = useState(0);
  console.log(value)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box minHeight="100vh"  sx={{ width: '100%',display: "flex",
    justifyContent: "center"}}>
      
      <Box sx={{ width: '100%'}}>
      <Tabs value={value} onChange={handleChange} variant="fullWidth">
        <Tab label="Item One" />
        <Tab label="Item Two" />
       
      </Tabs>
    </Box>
      </Box>
    
  );
};
