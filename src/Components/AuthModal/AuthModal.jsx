import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import AuthForm from '../Auth/AuthForm'
import Fade from '@mui/material/Fade'
import {Button, Paper} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

export default function AuthModal({open, setOpen}) {
  const handleClose = () => setOpen(false)
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backdropFilter: 'blur(3px)',
        }}
      >
        <Fade in={open}>
          <Box sx={{maxWidth: '463px'}}>
            {' '}
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
              <Box sx={{position: 'relative', width: '100%'}}>
                <Button
                  onClick={handleClose}
                  sx={{
                    position: 'absolute',
                    borderRadius: '50%',
                    minWidth: '32px',
                    height: '32px',
                    backgroundColor: 'rgba(19, 19, 25, 1)',
                    right: 0,
                    top: '-20px',
                    p: 0,
                  }}
                >
                  <CloseIcon sx={{color: 'white'}} fontSize="small" />
                </Button>
              </Box>
              <AuthForm />
            </Paper>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
