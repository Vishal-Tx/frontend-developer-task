import React from 'react'
import {TextField, Grid, InputAdornment, IconButton, Typography} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

const Input = ({name, label, placeholder, handleChange, type, autoFocus, handleShowPassword}) => {
  return (
    <Grid item xs={12}>
      <Typography sx={{color: ' rgba(197, 199, 202, 1)'}}>{label}</Typography>
      <TextField
        name={name}
        onChange={handleChange}
        variant="outlined"
        sx={{
          mt: '10px',
          color: 'white',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              border: '1.5px solid #35373B',
            },
            '&:hover fieldset': {
              borderColor: '#4A96FF',
            },
          },
          '& .MuiInputBase-input': {
            color: 'rgba(127, 128, 132, 1)',
          },
          '& .MuiInputBase-input::placeholder': {
            color: 'white',
          },
        }}
        required
        fullWidth
        hiddenLabel
        autoFocus={autoFocus}
        type={type}
        placeholder={placeholder}
        InputProps={
          name === 'password'
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {type === 'password' ? (
                        <VisibilityIcon sx={{color: 'rgba(127, 128, 132, 1)'}} />
                      ) : (
                        <VisibilityOffIcon sx={{color: 'rgba(127, 128, 132, 1)'}} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
      />
    </Grid>
  )
}

export default Input
