import React from 'react'
import {Box, Paper} from '@mui/material'
import Logo from '../../assets/Logo.png'
import AuthForm from './AuthForm'

const Auth = () => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div
        style={{
          maxWidth: '463px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img style={{margin: '50px 0 '}} src={Logo} alt="logo.." />
        <Paper
          elevation={3}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '40px 24px',
            maxWidth: '463px',
            backgroundColor: '#27292D',
            color: 'white',
            borderRadius: '8px',
            border: '2px solid grey',
            mb: '50px',
            mx: {xs: '10px', sm: 0},
          }}
        >
          <AuthForm />
        </Paper>
      </div>
    </Box>
  )
}

export default Auth
