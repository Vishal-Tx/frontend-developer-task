import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import Form from "./Form/Form";
import data from "./data";
import useLocalStorage from "../../Hooks/useLocalStorage";
import AuthModal from "../AuthModal/AuthModal";
const Home = () => {
  // const [posts, setPosts] = useState(data);
  const [storedPosts, setStoredPosts] = useLocalStorage("posts", data);
  const [allUsers, setAllUsers] = useLocalStorage("allUsers", []);
  const [currentUser, setCurrentUser] = useLocalStorage("currentUser", null);
  const [open, setOpen] = useState(false);

  const handlePostSubmit = (message, emoji) => {
    console.log(message, emoji);
    const post = { name: "sd", time: "2023", message, emoji };

    setStoredPosts([...storedPosts, post]);
  };

  return (
    <>
      <AuthModal
        open={open}
        setOpen={setOpen}
        allUsers={allUsers}
        setAllUser={setAllUsers}
        setCurrentUser={setCurrentUser}
      />
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
          Hello Jane
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

        <Form
          handlePostSubmit={handlePostSubmit}
          currentUser={currentUser}
          setOpen={setOpen}
        />
        {storedPosts
          .slice(0)
          .reverse()
          .map((post, index) => {
            return <Post key={index} {...post} />;
          })}
      </Container>
    </>
  );
};

export default Home;
