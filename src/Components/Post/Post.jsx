import { Avatar, Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import * as dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
const Post = ({ currentUser, handlePostDelete, ...post }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDelete = () => {
    setAnchorEl(null);
    handlePostDelete(post.id);
  };
  return (
    <Box
      sx={{
        p: "24px 20px",
        border: "2px solid rgba(53, 55, 59, 1)",
        mt: "16px",
        backgroundColor: "rgba(39, 41, 45, 1)",
        maxWidth: "700px",
        borderRadius: "8px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ fontSize: "55px", maxHeight: "55px", m: 0 }}>
            <AccountCircleIcon fontSize="inherit" />
          </Box>
          <Box sx={{ ml: "16px" }}>
            <Typography
              sx={{
                fontSize: "16px",
                lineHeight: "19px",
                align: "left",
                verticalLeft: "top",
                color: "rgba(197, 199, 202, 1)",
              }}
            >
              {post.name}
            </Typography>
            <Typography
              sx={{
                mt: "4px",
                color: "rgba(127, 128, 132, 1)",
                FontSize: "14px",
                LineHeight: "17px",
              }}
            >
              {dayjs(post.time).fromNow()}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreHorizIcon
              sx={{
                backgroundColor: "transparent",
                color: "rgba(197, 199, 202, 1)",
              }}
            />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              disabled={currentUser?.email !== post?.creator?.creatorEmail}
              onClick={handleDelete}
            >
              <DeleteIcon sx={{ ml: "-8px", mr: "20px" }} />
              Delete
            </MenuItem>
          </Menu>
        </Box>
      </Box>
      <Box
        sx={{
          padding: "15px 16px",
          backgroundColor: "rgba(25, 25, 32, 1)",
          maxWidth: "660px",
          borderRadius: "8px",
          marginTop: "18px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box>
          <Box
            sx={{
              backgroundColor: "rgba(39, 41, 45, 1)",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              fontSize: "22px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {post.emoji}
          </Box>
        </Box>
        <Typography
          sx={{
            ml: "16px",
            fontSize: "16px",
            lineHeight: "24px",
            color: "rgba(127, 128, 132, 1)",
          }}
        >
          {post.message}
        </Typography>
      </Box>
    </Box>
  );
};

export default Post;
