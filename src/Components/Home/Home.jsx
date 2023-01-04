import { Container, Typography } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Container sx={{ color: "rgba(197, 199, 202, 1)" }}>
      <Typography
        sx={{ fontSize: "28px", lineHeight: "34px", marginTop: "15px" }}
      >
        Hello Jane
      </Typography>
      <Typography
        sx={{
          maxWidth: "580px",
          mt: "12px",
          color: "rgba(127, 128, 132, 1)",
          fontSize: "16px",
          LineHeight: "24px",
          LineHeight: "150%",
          aligh: "left",
          verticalAlign: "top",
        }}
      >
        How are you doing today? Would you like to share something with the
        community 🤗
      </Typography>
    </Container>
  );
};

export default Home;
