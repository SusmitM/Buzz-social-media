import { Box, Grid, Typography } from "@mui/material";
import { useDataContext } from "../../contexts/DataContext";
import { UserCard } from "../UserSuggestion/UserCard";

export const Rightbar = () => {
  const { users } = useDataContext();
  return (
    <Box
      flex={2}
      sx={{ display: { xs: "none", sm: "flex" }, justifyContent: "center" }}
    >
      <Box position="fixed" width={300}>
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
  );
};
