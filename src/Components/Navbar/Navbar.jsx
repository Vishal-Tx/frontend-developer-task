import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "./style.css";
import { Button } from "@mui/material";
import postContext from "../../context";
import { toast } from "react-hot-toast";
import Logo from "./logo";

export default function Navbar() {
  const { currentUser, logoutUser } = useContext(postContext);

  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "#191945" }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Logo />
          </Box>

          {/* <Typography variant="h6" component="div">
            Photos
          </Typography> */}
          {/* <img src={Logo} alt="logo" /> */}

          <>
            <Link className="nav-link" to="/">
              Home
            </Link>
            {!currentUser && (
              <Link className="nav-link" to="/auth">
                SignIn{" "}
              </Link>
            )}
            {currentUser && (
              <Button
                sx={{
                  backgroundColor: "hsl(0, 0%, 100%)",
                  "&:hover": { backgroundColor: "hsl(0, 0%, 70%)" },
                }}
                onClick={() => {
                  logoutUser(),
                    toast("Bye!", {
                      icon: "👋",
                    });
                }}
              >
                Logout
              </Button>
            )}
          </>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
