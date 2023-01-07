import {Container, Typography} from '@mui/material'
import React, {useContext, useState} from 'react'
import Post from '../Post/Post'
import Form from './Form/Form'
import AuthModal from '../AuthModal/AuthModal'

import postContext from '../../context'
const Home = () => {
  const {storedPosts, currentUser} = useContext(postContext)
  const [open, setOpen] = useState(false)

  return (
    <>
      <AuthModal open={open} setOpen={setOpen} />
      <Container
        sx={{
          color: 'rgba(197, 199, 202, 1)',
          maxWidth: '780px !important',
          mb: '24px',
        }}
      >
        <Typography
          sx={{
            fontSize: '28px',
            lineHeight: '34px',
            marginTop: '15px',
            display: 'inline-block',
          }}
        >
          Hello {currentUser ? currentUser.username : 'there..'}
        </Typography>
        <Typography
          sx={{
            maxWidth: '580px',
            mt: '12px',
            color: 'rgba(127, 128, 132, 1)',
            fontSize: '16px',
            LineHeight: '24px',
            aligh: 'left',
            verticalAlign: 'top',
          }}
        >
          How are you doing today? Would you like to share something with the community 🤗
        </Typography>

        <Form setOpen={setOpen} />
        {storedPosts
          .slice(0)
          .reverse()
          .map(post => {
            return <Post key={post.id} {...post} />
          })}
      </Container>
    </>
  )
}

export default Home
