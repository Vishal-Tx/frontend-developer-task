import React, { useState } from "react";
import { Paper, Button, Grid, Typography, Container, Box } from "@mui/material";

import Logo from "../../assets/Logo.png";
import AuthForm from "./AuthForm";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <div
        style={{
          maxWidth: "463px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img style={{ margin: "50px 0 " }} src={Logo} alt="logo.." />
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "40px 24px",
            maxWidth: "463px",
            backgroundColor: "#27292D",
            color: "white",
            borderRadius: "8px",
            border: "2px solid grey",
            mb: "50px",
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              color: " rgba(107, 108, 112, 1)",
              letterSpacing: "0.03rem",
              fontSize: "14px",
            }}
          >
            {isSignUp ? "Sign Up" : "Welcome Back"}
          </Typography>
          <Typography
            sx={{
              fontWeight: "600",
              mt: "8px",
              lineHeight: "22px",
              fontSize: "18px",
            }}
          >
            {isSignUp
              ? "Create an account to continue"
              : "Log into your account"}
          </Typography>
          <AuthForm setIsSignUp={setIsSignUp} isSignUp={isSignUp} />
        </Paper>
      </div>
    </Box>
  );
};

export default Auth;
