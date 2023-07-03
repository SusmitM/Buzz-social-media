import { Box, CircularProgress } from "@mui/material";



export const Loader = () => {
  return (
    <>
       
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 9999,
          }}
        >
          <CircularProgress />
        </Box>
      
    </>
  );
};
