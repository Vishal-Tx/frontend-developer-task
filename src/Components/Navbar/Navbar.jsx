import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import "./style.css";
import { Button } from "@mui/material";
import postContext from "../../context";
import { toast } from "react-hot-toast";

export default function Navbar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { currentUser, logoutUser } = React.useContext(postContext);

  return (
    <Box sx={{}}>
      <AppBar position="static" sx={{ backgroundColor: "#191945" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Photos
          </Typography>
          {auth && (
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
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
