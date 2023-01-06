import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AuthForm from "../Auth/AuthForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AuthModal({
  open,
  setOpen,
  allUsers,
  setAllUser,
  setCurrentUser,
}) {
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backdropFilter: "blur(3px)",
        }}
      >
        <Box sx={{ maxWidth: "463px" }}>
          {" "}
          <AuthForm
            allUsers={allUsers}
            setAllUser={setAllUser}
            setCurrentUser={setCurrentUser}
          />
        </Box>
      </Modal>
    </div>
  );
}
