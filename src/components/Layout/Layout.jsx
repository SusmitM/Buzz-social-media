import { Box, Stack } from "@mui/material"
import { Rightbar } from "../Rightbar/Rightbar"
import { Sidebar } from "../Sidebar/Sidebar"


export const Layout = ({children}) => {
  return (
    <Box>
        <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar/>
        <Box flex={4} p={{ xs: 0, md: 2 }} sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        {children}
        </Box>
        
        <Rightbar/>
        </Stack>
    </Box>
  )
}
