import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Post from "../Post/Post";
import Form from "./Form/Form";
import data from "../../assets/data";
import useLocalStorage from "../../Hooks/useLocalStorage";
import AuthModal from "../AuthModal/AuthModal";

import postContext from "../../context";
const Home = () => {
  // const [posts, setPosts] = useState(data);
  const { storedPosts, currentUser } = useContext(postContext);
  const [open, setOpen] = useState(false);

  console.log("effect");

  return (
    <>
      <AuthModal open={open} setOpen={setOpen} />
      <Container
        sx={{
          color: "rgba(197, 199, 202, 1)",
          width: "max-content",
          mb: "24px",
        }}
      >
        <Typography
          sx={{
            fontSize: "28px",
            lineHeight: "34px",
            marginTop: "15px",
            display: "inline-block",
          }}
        >
          Hello {currentUser ? currentUser.username : "there.."}
        </Typography>
        <Typography
          sx={{
            maxWidth: "580px",
            mt: "12px",
            color: "rgba(127, 128, 132, 1)",
            fontSize: "16px",
            LineHeight: "24px",
            aligh: "left",
            verticalAlign: "top",
          }}
        >
          How are you doing today? Would you like to share something with the
          community 🤗
        </Typography>

        <Form setOpen={setOpen} />
        {storedPosts
          .slice(0)
          .reverse()
          .map((post) => {
            return <Post key={post.id} {...post} />;
          })}
      </Container>
    </>
  );
};

export default Home;
