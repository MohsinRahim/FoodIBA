import React, { useState, useContext, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { isValidEmail, isValidPassword, isValidName } from '../../utils/Validation';
import UserContext from '../../UserContext';
import { useNavigate } from 'react-router-dom';
import { login, signup } from '../../Services/userServicetest';
//import myLocalImage from '../LoginSignup_Material/picture_gpt.png';
import myLocalImage from '../Assets/picture_gpt.png'
import { Radio, RadioGroup } from '@mui/material';
//check
const defaultTheme = createTheme();

export default function LoginSignup({ loading, error, onLogin, onSignup }) {
  const navigate = useNavigate();
  const [action, setAction] = useState("Login");

  const handleLogin = async (email, password) => {
    try {
      const responseData = await login({ email, password });
      if (responseData.message === 'logged in successfully') {
        localStorage.setItem('token', responseData.data.token);
        localStorage.setItem('role', responseData.data.role);

        console.log("Received ", responseData);
        navigate('/home');
      } else {
        window.alert('Login Failed');
      }
    } catch (error) {
      window.alert('An error occurred during login: ' + error.message);
    }
  };

  const handleSignup = async (firstName, lastName, email, password, role) => {
    if (!isValidName(firstName)) {
      window.alert('Name should be at least 2 characters.');
      return;
    }
    if (!isValidName(lastName)) {
      window.alert('Name should be at least 2 characters.');
      return;
    }
    if (!isValidEmail(email)) {
      window.alert('Please enter a valid email address.');
      return;
    }
    if (!isValidPassword(password)) {
      window.alert('Password should be at least 6 characters long.');
      return;
    }
    try {
      const response = await signup({ firstName, lastName, email, password, role });
      console.log(response);
      const responseData = response.message;

      if (responseData === 'User created successfully') {
        
        handleLogin(email,password);
      } else {
        window.alert('Signup Failed');
      }
    } catch (error) {
      console.log(error);
      window.alert('An error occurred during signup', error);
    }
  };

  const [userType, setUserType] = useState('user'); // Default to 'user'

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    const firstName = action === "Signup" ? data.get('firstName') : "";
    const lastName = action === "Signup" ? data.get('lastName') : "";
    const role = userType;

    if (action === "Login") {
      handleLogin(email, password);
    } else {
      handleSignup(firstName, lastName, email, password, role);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
    item
    xs={false}
    sm={4}
    md={7}
    sx={{
      backgroundImage: `url(${myLocalImage})`, // Replace with your image URL
      backgroundRepeat: 'no-repeat',
      backgroundColor: (t) =>
        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {action}
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              {action === "Signup" && (
                <div>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    autoComplete="firstName"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lastName"
                  />
                </div>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {action === "Signup" && (
                <RadioGroup row value={userType} onChange={handleUserTypeChange}>
                  <FormControlLabel
                    value="user"
                    control={<Radio color="primary" />}
                    label="User"
                  />
                  <FormControlLabel
                    value="restaurant owner"
                    control={<Radio color="primary" />}
                    label="Restaurant Owner"
                  />
                </RadioGroup>
              )}
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={loading}
              >
                {loading ? 'Loading...' : action === 'Login' ? 'Sign In' : 'Sign Up'}
              </Button>
              {error && (
                <Typography variant="body2" color="error" align="center" sx={{ mb: 2 }}>
                  {error}
                </Typography>
              )}
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2" onClick={() => setAction(action === "Login" ? "Signup" : "Login")}>
                    {action === "Login" ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
