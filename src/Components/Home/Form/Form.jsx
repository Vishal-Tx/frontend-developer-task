import React, {useContext, useState} from 'react'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import {Box, Button, TextField, Typography} from '@mui/material'
import toast from 'react-hot-toast'
import postContext from '../../../context'

const Form = ({setOpen}) => {
  const {createPost, currentUser} = useContext(postContext)
  const [emoji, setEmoji] = useState('💬')
  const [message, setMessage] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  const handleVisible = e => {
    e.stopPropagation()
    setIsVisible(!isVisible)
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (!currentUser) {
      setOpen(true)
      toast('Login first to Post.', {icon: '👏'})
    } else {
      if (message.trim().length === 0) {
        toast('Post cannot be empty.', {icon: '⚠️'})
        return
      }
      createPost(message, emoji)
      setMessage('')
    }
  }
  return (
    <Box
      sx={{
        p: '24px 20px',
        border: '2px solid rgba(53, 55, 59, 1)',
        mt: '40px',
        backgroundColor: 'rgba(39, 41, 45, 1)',
        maxWidth: '700px',
        maxHeight: '223px',
        borderRadius: '8px',
      }}
    >
      <Typography sx={{color: 'rgba(197, 199, 202, 1)'}}>Create Post</Typography>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            padding: '15px 16px',
            backgroundColor: 'rgba(25, 25, 32, 1)',
            maxWidth: '660px',
            maxHeight: '78px',
            borderRadius: '8px',
            marginTop: '18px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box sx={{position: 'relative'}}>
            <Button
              onClick={handleVisible}
              type="button"
              sx={{
                backgroundColor: 'rgba(39, 41, 45, 1)',
                '&. css-15cvrn0-MuiButtonBase-root-MuiButton-root': {
                  minWidth: 0,
                },
                minWidth: '48px',
                height: '48px',
                borderRadius: '50%',
                padding: 0,
                fontSize: '25px',
              }}
            >
              {emoji}
            </Button>
            {isVisible && (
              <Box sx={{position: 'absolute', left: 0}}>
                <Picker
                  style={{height: '200px'}}
                  data={data}
                  onEmojiSelect={data => {
                    setEmoji(data.native)
                    setIsVisible(false)
                  }}
                  onClickOutside={() => setIsVisible(false)}
                />
              </Box>
            )}
          </Box>
          <TextField
            fullWidth
            variant="standard"
            value={message}
            autoComplete="off"
            onChange={e => setMessage(e.target.value)}
            placeholder="How are you feeling today?"
            sx={{
              ml: '16px',
              '& .MuiInputBase-input': {
                color: 'rgba(127, 128, 132, 1)',
              },
              '& .MuiInputBase-input::placeholder': {
                color: 'white',
              },
            }}
          />
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: '16px',
              width: '111px',
              height: '43px',
            }}
          >
            Post
          </Button>
        </Box>
      </form>
    </Box>
  )
}

export default Form
