import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Copyright() {
  return (
    <Box
    sx={{marginBottom:5}} >
    <Typography variant="body2" color="text.secondary" align="center" >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Asset
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    </Box>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Register() {
  const navigate=useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const [formData, setFormData] = useState({
    buildingname: '',
    buildingcode: '',
    buildingtype: '',
    district: '',
    mpc: '',
    postoffice: '',
    pincode: '',
    locality: '',
    ward:'',
    email: '',
    password: '',
  });
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:3001/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); 
        setFormData({
          buildingname: '',
          buildingcode: '',
          buildingtype: '',
          district: '',
          mpc: '',
          postoffice: '',
          pincode: '',
          locality: '',
          ward:'',
          email: '',
          password: '',
        });
        alert("User Successfully registered");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };


  const handleInputChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            marginBottom:5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="buildingname"
              label="Building Name"
              value={formData.buildingname}
              onChange={handleInputChange}
              name="buildingname"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="buildingcode"
              label="Building Number"
              name="buildingcode"
              value={formData.buildingcode}
              onChange={handleInputChange}
              autoComplete="buildingcode"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="buildingtype"
              label="Building Type"
              value={formData.buildingtype}
              name="buildingtype"
              autoComplete="buildingtype"
              onChange={handleInputChange}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="district"
              value={formData.district}
              label="District"
              name="district"
              autoComplete="district"
              onChange={handleInputChange}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="mpc"
              value={formData.mpc}
              label="Muncipality/Panchayath/Coorperation"
              name="mpc"
              autoComplete="mpc"
              onChange={handleInputChange}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="ward"
              value={formData.ward}
              label="Ward"
              name="ward"
              autoComplete="ward"
              onChange={handleInputChange}
              autoFocus
              />
            <TextField
              margin="normal"
              required
              fullWidth
              id="postoffice"
              value={formData.postoffice}
              label="Post Office"
              name="postoffice"
              autoComplete="postoffice"
              onChange={handleInputChange}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="pincode"
              value={formData.pincode}
              label="pincode Code"
              name="pincode"
              autoComplete="pincode"
              onChange={handleInputChange}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="locality"
              label="Locality"
              value={formData.locality}
              name="locality"
              autoComplete="locality"
              onChange={handleInputChange}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              value={formData.email}
              name="email"
              autoComplete="email"
              onChange={handleInputChange}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              value={formData.password}
              label="Password"
              type="password"
              onChange={handleInputChange}
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              REGISTER
            </Button>
            <Grid container >
              <Grid item>
                <Typography color="text.secondary" align="center">
                {"Don't have an account? "}
                <Link href="/" variant="body2">
                  {"Login"}
                </Link>
                </Typography>
              </Grid>
            </Grid>
            <Box
            sx={{marginBottom:8,
            marginTop:5}} >
            <Typography variant="body2" color="text.secondary" align="center" >
              {'Copyright © Asset'}
              {new Date().getFullYear()}
              {'.'}
            </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}