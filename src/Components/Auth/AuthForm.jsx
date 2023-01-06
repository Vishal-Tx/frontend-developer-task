import { Button, Grid, Paper, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Input from "./Input";
import { toast } from "react-hot-toast";
import postContext from "../../context";
import { useNavigate } from "react-router-dom";
import { encode, decode } from "js-base64";
const AuthForm = () => {
  const { allUsers, setAllUsers, setCurrentUser } = useContext(postContext);
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = formData;
    if (isSignUp) {
      const existingUser = allUsers.filter(
        (user) => user.email === email && user.username === username
      );
      console.log("existingUser", existingUser);
      if (existingUser.length) {
        toast("user already exists", {
          icon: "😔",
        });
        return;
      }
      const hashedPassword = encode(password);
      const user = { username, email, password: hashedPassword };
      setAllUsers([...allUsers, user]);
      setCurrentUser(user);
      console.log("isSignUpUSer", user);
      navigate("/");
    } else {
      const { email, password } = formData;

      const existingUser = allUsers.filter(
        (user) => user.email === email || user.username === email
      );
      if (existingUser.length) {
        const isVerified = password !== decode(existingUser[0].password);
        if (!!isVerified) {
          toast.error("Invalid Crediantials!");
        } else {
          setCurrentUser(existingUser[0]);
          toast.success(`Welcome ${existingUser[0].username}`);
          navigate("/");
        }
      } else {
        toast.error("Try Again!");
      }
    }
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
        mx: { xs: "10px", sm: 0 },
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
        {isSignUp ? "Create an account to continue" : "Log into your account"}
      </Typography>
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
              name="username"
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
    </Paper>
  );
};

export default AuthForm;
