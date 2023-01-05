import { Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Input from "./Input";
const AuthForm = ({ isSignUp, setIsSignUp }) => {
  const [showPassword, setShowPassword] = useState(false);
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
    <form style={{ marginTop: "45px" }} onSubmit={handleSubmit}>
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
        sx={{
          margin: "20px 0 15px",
          backgrounColor: " rgba(74, 150, 255, 1)",
        }}
      >
        {isSignUp ? "Continue" : "Login now"}
      </Button>
      <div style={{ display: "flex", justifyContent: "center" }}></div>
      <Grid container justifyContent="flex-start">
        <Grid item>
          <Typography sx={{ color: "rgba(127, 128, 132, 1)" }}>
            {isSignUp ? "Already have an Account?" : "Not registered yet?"}
            <Button
              onClick={switchMode}
              color="primary"
              sx={{
                padding: 0,
                ml: "2px",
                mt: "-2px",
                color: "rgba(197, 199, 202, 1)",
                textTransform: "none",
              }}
            >
              {isSignUp ? "Login " : "Register"}
              <ArrowForwardIcon fontSize="small" sx={{ mt: "-1px" }} />
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </form>
  );
};

export default AuthForm;
