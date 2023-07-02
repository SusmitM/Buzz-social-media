import { Autocomplete, Box, InputBase, Stack, TextField, ThemeProvider } from "@mui/material";
import { useDataContext } from "../../contexts/DataContext";
import { UserCard } from "../UserSuggestion/UserCard";



export const SearchBar = () => {
    const { users } = useDataContext();
  
    return (
      <Stack sx={{ width: "330px", margin: "auto" }}>
        <Autocomplete
          id="searchBox"
          getOptionLabel={(user) => user.firstName + " " + user.lastName}
          options={users}
          sx={{ width: "330px" }}
          isOptionEqualToValue={(option, value) => {
            const lowerCaseValue = typeof value === "string" ? value.toLowerCase() : "";
            return (
              option.firstName.toLowerCase().includes(lowerCaseValue) ||
              option.lastName.toLowerCase().includes(lowerCaseValue)
            );
          }}
          noOptionsText={"No Users Found"}
          renderOption={(props, user) => (
            <Box component="li" {...props} key={user._id}>
              <UserCard profileData={user} />
            </Box>
          )}
          renderInput={(params) => (
            <TextField sx={{border:"1px solid white",padding:"0px 5px",borderRadius:"2rem",all: "unset"}}
            size="small"
            halfWidth
            id="searchField"
            name="searchField"
            type="text"
            autoFocus
            placeholder="Search..." 
            
            {...params} />
          )}
        />
      </Stack>
    );
  };