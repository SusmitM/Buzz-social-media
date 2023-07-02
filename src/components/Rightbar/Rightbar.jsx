import { Box, Grid, Typography } from "@mui/material";
import { useDataContext } from "../../contexts/DataContext";
import { UserCard } from "../UserSuggestion/UserCard";
import { SearchBar } from "../SearchBar/SearchBar";

export const Rightbar = () => {
  const { users } = useDataContext();
  return (
    <Box
      flex={2}
      sx={{ display: { xs: "none", sm: "block" }, justifyContent: "center",minWidth:"350px" }}
    >
      <Box position="fixed"sx={{ mt:3 }}>
      <SearchBar/>
     
      <Box>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Suggestions for you
          </Typography>
        <Grid item xs={12} md={6}>
          
          {users?.map((profileData) => (
            <UserCard profileData={profileData} />
          ))}
        </Grid>
      </Box>
    </Box>
    </Box>
  );
};
