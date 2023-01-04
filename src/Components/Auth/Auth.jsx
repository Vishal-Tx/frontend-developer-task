import React, { useState } from "react";
import { Paper, Button, Grid, Typography, Container } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Input from "./Input";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevdata) => ({ ...prevdata, [name]: value }));
  };
  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  const switchMode = () => {
    setIsSignUp((prevState) => !prevState);
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: "400" }}>
          {isSignUp ? "Sign Up" : "Welcome Back"}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "600" }}>
          {isSignUp ? "Create an account to continue" : "Log into your account"}
        </Typography>
        <form
          style={{ width: "100%", marginTop: "20px" }}
          onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>
            <Input
              name="email"
              label={isSignUp ? "Email" : "Email or Username"}
              handleChange={handleChange}
              type="email"
              placeholder={
                isSignUp ? "Enter your email" : "Enter your email or username"
              }
            />
            {isSignUp && (
              <Input
                name="Username"
                label="Username"
                handleChange={handleChange}
                placeholder="Choose a preferred username"
              />
            )}
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
              placeholder={
                isSignUp ? "Choose a strong password" : "Enter your password"
              }
            />
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ margin: "20px 0 15px" }}
          >
            {isSignUp ? "Continue" : "Login now"}
          </Button>
          <div style={{ display: "flex", justifyContent: "center" }}></div>
          <Grid container justifyContent="flex-start">
            <Grid item>
              <Typography>
                {isSignUp ? "Already have an Account?" : "Not registered yet?"}
                <Button
                  onClick={switchMode}
                  color="primary"
                  sx={{ padding: 0, ml: "2px", mt: "-2px" }}
                >
                  {isSignUp ? "Login " : "Register"}
                  <ArrowForwardIcon fontSize="small" sx={{ mt: "-1px" }} />
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
