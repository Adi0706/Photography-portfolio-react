import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

export default function Contact() {
  const [post, setPost] = useState({
    name: "",
    email: "",
    Phone_Number: "",
    Text_Field: "",
  });

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const sendData = async () => {
    try {
      const response = await fetch("/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });

      if (response.ok) {
        alert("Data sent successfully!");
        setPost({
          name: "",
          email: "",
          Phone_Number: "",
          Text_Field: "",
        });
      } else {
        console.log("Error sending data:", response.statusText);
      }
    } catch (error) {
      console.log("Error sending data:", error.message);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" className="theme">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography
            component="h1"
            variant="h5"
            sx={{ color: "white", fontSize: 24, marginBottom: 3 }}
          >
            HAVE A QUESTION ?
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
              value={post.name}
              onChange={handleInput}
              sx={{
                backgroundColor: "white",
                borderRadius: "10px",
                fontSize: 16,
                marginBottom: 2,
              }}
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
              value={post.email}
              onChange={handleInput}
              sx={{
                backgroundColor: "white",
                borderRadius: "10px",
                fontSize: 16,
                marginBottom: 2,
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Phone_Number"
              label="Phone Number"
              type="tel"
              id="mobile"
              autoComplete="current-mobile"
              value={post.Phone_Number}
              onChange={handleInput}
              sx={{
                backgroundColor: "white",
                borderRadius: "10px",
                fontSize: 16,
                marginBottom: 2,
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Text_Field"
              label="How can I help you?"
              id="Help"
              value={post.Text_Field}
              onChange={handleInput}
              sx={{
                backgroundColor: "white",
                borderRadius: "10px",
                fontSize: 16,
                marginBottom: 2,
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={sendData}
            >
              SUBMIT
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
