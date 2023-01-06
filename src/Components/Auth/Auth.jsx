import React from "react";
import { Box } from "@mui/material";

import Logo from "../../assets/Logo.png";
import AuthForm from "./AuthForm";

const Auth = () => {
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

        <AuthForm />
      </div>
    </Box>
  );
};

export default Auth;
