import { useState } from 'react';
import { Box, Stack,ThemeProvider,createTheme,Divider } from "@mui/material"
import {Navbar} from "../Navbar/Navbar"
import { Rightbar } from "../Rightbar/Rightbar"
import { Sidebar } from "../Sidebar/Sidebar"


export const Layout = ({children}) => {
    const [mode, setMode] = useState("light");
    const darkTheme = createTheme({
        palette: {
          mode: mode,
        },
      });
    
  return (
    <ThemeProvider  theme={darkTheme}>
    <Box backgroundColor={"background.default"} color={"text.primary"} >
         <Navbar setMode={setMode} mode={mode} />
        <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar/>
        <Divider orientation="vertical" flexItem />
        <Box  flex={4} p={{ xs: 0, md: 2 }}  minHeight="100vh" sx={{ width: '100%',display: "flex",
    justifyContent: "center"}}>
        {children}
        </Box>
        <Divider orientation="vertical" flexItem />
        <Rightbar/>
        </Stack>
    </Box>
    </ThemeProvider>
  )
}
