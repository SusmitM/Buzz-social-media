import {
  Box,
  CssBaseline,
  Grid,
  Avatar,
  Typography,
  TextField,
  InputLabel,
  Paper,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
  Link,
} from "@mui/material";
import "./SignUp.module.css";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export const SignUp = () => {
  const { signUpHandler } = useAuthContext();

  //states for show and unshow password
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  //functions to control show & unshow password
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  //function to handel signUp

  const handelSignUp = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if(data.get("password")===data.get("confirmPassword")){
     const signUpData={
      profileAvatar:
      "http://bit.ly/42Zm7tM",
      email: data.get("email"),
      password: data.get("password"),
      username: data.get("username"),
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
     }
     signUpHandler(signUpData)
    }
    else{
      alert("Your Passwords are not matching")
    }
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) => t.palette.grey[50],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Grid>
      <Grid xs={12} sm={8} md={5} align="center">
        <Paper
          elevation={20}
          sx={{
            my: 8,
            mx: 4,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" fontWeight={400}>
            Sign Up
          </Typography>

          <Box
            component="form"
            onSubmit={handelSignUp}
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
              padding: "2rem",
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="space-evenly"
              textAlign="left"
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <InputLabel htmlFor="firstName">First Name</InputLabel>
                <TextField
                  size="small"
                  halfWidth
                  required
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  autoFocus
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <InputLabel htmlFor="lastName">Last Name</InputLabel>
                <TextField
                  size="small"
                  halfWidth
                  required
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoFocus
                />
              </Box>
            </Grid>
            <InputLabel sx={{ marginTop: "10px" }} htmlFor="email">
              Email
            </InputLabel>
            <TextField
              size="small"
              halfWidth
              required
              id="email"
              name="email"
              type="email"
              autoFocus
              label="Email"
            />
            <InputLabel sx={{ marginTop: "10px" }} htmlFor="username">
              Username
            </InputLabel>
            <TextField
              size="small"
              halfWidth
              required
              id="username"
              name="username"
              type="username"
              autoFocus
              label="Username"
            />
            <InputLabel sx={{ marginTop: "10px" }} htmlFor="password">
              Password
            </InputLabel>

            <OutlinedInput
              id="password"
              label="password"
              name="password"
              required
              size="small"
              halfWidth
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end" label="password">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <InputLabel sx={{ marginTop: "10px" }} htmlFor="confirmPassword">
              Confirm Password
            </InputLabel>
            <OutlinedInput
              id="confirmPassword"
              label="Confirm Password"
              name="confirmPassword"
              required
              size="small"
              halfWidth
              type={showConfirmPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfirmPassword}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <Button
              type="submit"
              halfWidth
              variant="contained"
              sx={{ mt: 3, mb: 1 }}
            >
              Sign Up
            </Button>
          </Box>

          <Box sx={{ fontWeight: "400", padding: "5px" }}>
            Already Have an account?{" "}
            <Link
              onClick={() => navigate("/signin")}
              sx={{ cursor: "pointer" }}
              variant="body2"
            >
              {"Signin Here"}
            </Link>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};
