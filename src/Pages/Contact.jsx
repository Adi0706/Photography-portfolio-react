import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import axios from 'axios';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Contact() {
  const [post, setpost] = useState({
    email: "",
    password: "",
    Phone_Number: "",
    Address: "",
  });
  const handleInput = (event) => {
    setpost({ ...post, [event.target.name]: event.target.value });
  };

  // function handleSubmit(event){
  //   event.preventDefault();
  //   axios.post('http://localhost:3001/data',{post},

  //   ).then(response=>console.log(response))
  //   .catch(err=>console.log(err))

  // }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ color: "white" }}>
            CONTACT FORM
          </Typography>

          <Box component="form" noValidate sx={{ mt: 3 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="Name"
              label="Your Name"
              name="name"
              autoComplete="Name"
              autoFocus
              onChange={handleInput}
              sx={{ backgroundColor: "white" }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleInput}
              sx={{ backgroundColor: "white" }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Contact"
              label="Contact Number"
              type="tel" // Updated type to 'tel'
              id="contact"
              autoComplete="current-password"
              onChange={handleInput}
              sx={{ backgroundColor: "white" }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Phone_Number"
              label="Phone Number"
              type="phone number"
              id="mobile"
              autoComplete="current-mobile"
              onChange={handleInput}
              sx={{ backgroundColor: "white" }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Text-Field"
              label="How can I help you ?"
              id="Help"
              onChange={handleInput}
              sx={{ backgroundColor: "white" }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              SUBMIT
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
