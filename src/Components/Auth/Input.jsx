import React from "react";
import {
  TextField,
  Grid,
  InputAdornment,
  IconButton,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Input = ({
  name,
  label,
  placeholder,
  half,
  handleChange,
  type,
  autoFocus,
  handleShowPassword,
}) => {
  return (
    <Grid item sm={half ? 6 : 12} xs={12}>
      <Typography mb={1}>{label}</Typography>
      <TextField
        name={name}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        hiddenLabel
        autoFocus={autoFocus}
        type={type}
        placeholder={placeholder}
        InputProps={
          name === "password"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {type === "password" ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
      />
    </Grid>
  );
};

export default Input;
