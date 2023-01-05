import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import messageLogo from "../../assets/message.png";
import helloLogo from "../../assets/hello.png";
import sadLogo from "../../assets/sad.png";
import EmojiPicker, { Emoji } from "emoji-picker-react";
const Home = () => {
  const [age, setAge] = useState(messageLogo);
  const [isVisible, setIsVisible] = useState(false);
  const [emojiId, setEmojiId] = useState("1f4ac");
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleVisible = () => {
    setIsVisible((prevValue) => !prevValue);
  };

  const handlePostSubmit = () => {
    console.log(message, emojiId);
  };
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
      <Box
        sx={{
          p: "24px 20px",
          border: "2px solid rgba(53, 55, 59, 1)",
          mt: "40px",
          backgroundColor: "rgba(39, 41, 45, 1)",
          maxWidth: "700px",
          maxHeight: "223px",
          borderRadius: "8px",
        }}
      >
        <Typography sx={{ color: "rgba(197, 199, 202, 1)" }}>
          Create Post
        </Typography>

        <Box
          sx={{
            padding: "15px 16px",
            backgroundColor: "rgba(25, 25, 32, 1)",
            maxWidth: "660px",
            maxHeight: "78px",
            borderRadius: "8px",
            marginTop: "18px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            onClick={handleVisible}
            sx={{
              backgroundColor: "rgba(39, 41, 45, 1)",
              "&. css-15cvrn0-MuiButtonBase-root-MuiButton-root": {
                minWidth: 0,
              },
              minWidth: "48px",
              height: "48px",
              borderRadius: "50%",
              padding: 0,
            }}
          >
            <Emoji unified={emojiId} size="25" />
          </Button>
          {isVisible && (
            <EmojiPicker
              onEmojiClick={(emojiData) => {
                setIsVisible(false), console.log(emojiData);
                setEmojiId(emojiData.unified);
              }}
            />
          )}
          {/* <Select
            value={age}
            label="Age"
            onChange={handleChange}
            IconComponent=""
            sx={{
              backgroundColor: "rgba(39, 41, 45, 1)",
              borderRadius: "50%",
              width: "48px",
              height: "48px",
              paddingLeft: "2px",
              paddingTop: "2px",
            }}
          >
            <MenuItem value={messageLogo}>
              <img
                src={messageLogo}
                alt="messagelogo"
                style={{ width: "18px", height: "18xp" }}
              ></img>
            </MenuItem>
            <MenuItem value={helloLogo}>
              <img
                src={helloLogo}
                alt="helloLogo"
                style={{ width: "18px", height: "18xp" }}
              ></img>
            </MenuItem>
            <MenuItem value={sadLogo}>
              <img
                src={sadLogo}
                alt="sadLogo"
                style={{ width: "18px", height: "18xp" }}
              ></img>
            </MenuItem>
          </Select> */}
          <TextField
            fullWidth
            variant="standard"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="How are you feeling today?"
            sx={{
              ml: "16px",
              "& .MuiInputBase-input": {
                color: "rgba(127, 128, 132, 1)",
              },
              "& .MuiInputBase-input::placeholder": {
                color: "white",
              },
            }}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            sx={{
              mt: "16px",
              width: "111px",
              height: "43px",
            }}
            onClick={handlePostSubmit}
          >
            Post
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;