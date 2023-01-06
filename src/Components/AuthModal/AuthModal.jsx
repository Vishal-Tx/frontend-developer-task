import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AuthForm from "../Auth/AuthForm";

export default function AuthModal({ open, setOpen }) {
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
          <AuthForm />
        </Box>
      </Modal>
    </div>
  );
}
