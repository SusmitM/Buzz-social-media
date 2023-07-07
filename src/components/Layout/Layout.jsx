import { useEffect, useState } from 'react';
import { Box, Stack,ThemeProvider,createTheme,Divider } from "@mui/material"
import {Navbar} from "../Navbar/Navbar"
import { Rightbar } from "../Rightbar/Rightbar"
import { Sidebar } from "../Sidebar/Sidebar"
import { Loader } from '../Loader/Loader';
import { useAuthContext } from '../../contexts/AuthContext';


export const Layout = ({children}) => {
  const {showLoader,setShowLoader}=useAuthContext();
 
    const [mode, setMode] = useState("light");
    const darkTheme = createTheme({
        palette: {
          mode: mode,
        },
      });
      useEffect(() => {
        setTimeout(() => setShowLoader(false), 2000);
      }, []);
    
  return (
    <ThemeProvider  theme={darkTheme}>
    <Box backgroundColor={"background.default"} color={"text.primary"} >
         <Navbar setMode={setMode} mode={mode} />
         
        <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar/>
        <Divider  sx={{ display: { xs: "none", sm: "block" }}} orientation="vertical" flexItem />
       
        <Box  flex={4} p={{ xs: 0, md: 2 }}  minHeight="100vh" sx={{ width: '100%',display: "flex",
    justifyContent: "center"}}>
      {showLoader ?<Loader /> :children}
        </Box>
        <Divider sx={{ display: { xs: "none", sm: "block" }}} orientation="vertical" flexItem  />
        <Rightbar/>
        </Stack>
    </Box>
    </ThemeProvider>
  )
}
