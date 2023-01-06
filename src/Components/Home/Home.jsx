import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Post from "../Post/Post";
import Form from "./Form/Form";
import data from "../../assets/data";
import useLocalStorage from "../../Hooks/useLocalStorage";
import AuthModal from "../AuthModal/AuthModal";
import * as dayjs from "dayjs";
import { nanoid } from "nanoid";
import postContext from "../../context";
const Home = () => {
  // const [posts, setPosts] = useState(data);
  const {
    storedPosts,
    setStoredPosts,
    allUsers,
    setAllUsers,
    currentUser,
    setCurrentUser,
  } = useContext(postContext);
  // const [storedPosts, setStoredPosts] = useLocalStorage("posts", data);
  // const [allUsers, setAllUsers] = useLocalStorage("allUsers", []);
  // const [currentUser, setCurrentUser] = useLocalStorage("currentUser", null);
  const [open, setOpen] = useState(false);

  const handlePostSubmit = (message, emoji) => {
    console.log(message, emoji);
    const post = {
      id: nanoid(),
      name: currentUser.username,
      time: dayjs().format(),
      message,
      emoji,
      creator: {
        creatorEmail: currentUser.email,
        creatorUserName: currentUser.username,
      },
    };

    setStoredPosts([...storedPosts, post]);
  };
  const handlePostDelete = async (id) => {
    const updatedPosts = storedPosts.filter((post) => post?.id !== id);
    console.log("updatedPosts", updatedPosts);
    setStoredPosts(updatedPosts);
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

        <Form
          handlePostSubmit={handlePostSubmit}
          currentUser={currentUser}
          setOpen={setOpen}
        />
        {storedPosts
          .slice(0)
          .reverse()
          .map((post, index) => {
            return (
              <Post
                key={index}
                {...post}
                currentUser={currentUser}
                handlePostDelete={handlePostDelete}
              />
            );
          })}
      </Container>
    </>
  );
};

export default Home;
