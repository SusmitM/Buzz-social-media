import { useState } from "react";

import {
  Avatar,
  Button,
  CssBaseline,
  IconButton,
  TextField,
  InputLabel,
  InputAdornment,
  OutlinedInput,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import "./SignIn.module.css";
import { useAuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const { loginHandler } = useAuthContext();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    loginHandler({
      username: data.get("username"),
      password: data.get("password"),
    });
  };

  const guestLogin = () => {
    loginHandler({
      username: "adarshbalika",
      password: "adarshBalika123",
    });
  };
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
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
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5" fontWeight={400}>
            Sign In
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
             <InputLabel htmlFor="username">
              Username
            </InputLabel>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
            />

            <InputLabel htmlFor="password">
              Password
            </InputLabel>
            

            <OutlinedInput
              id="password"
              label="password"
              name="password"
              required
              fullWidth
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end"  >
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 1 }}
            >
              Sign In
            </Button>
            <Typography textAlign="center" fontWeight={600}>
              or
            </Typography>
            <Button
              onClick={() => guestLogin()}
              fullWidth
              variant="outlined"
              sx={{ mt: 1, mb: 2 }}
            >
              Guest User
            </Button>
            <Grid container>
              <Grid item>
                <Box sx={{ fontWeight: "500" }}>
                  Don't have an account?{" "}
                  <Link
                    onClick={() => navigate("/signup")}
                    sx={{ cursor: "pointer" }}
                    variant="body2"
                  >
                    {"Register Here"}
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
