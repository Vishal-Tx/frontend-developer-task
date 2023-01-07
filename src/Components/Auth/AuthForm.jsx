import {Box, Button, Chip, Grid, Paper, Typography} from '@mui/material'
import React, {useContext, useState} from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Input from './Input'
import {toast} from 'react-hot-toast'
import postContext from '../../context'
import {useNavigate} from 'react-router-dom'
import {encode, decode} from 'js-base64'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
const AuthForm = () => {
  const {allUsers, setAllUsers, setCurrentUser} = useContext(postContext)
  const [showPassword, setShowPassword] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    nameorEmail: '',
  })
  const navigate = useNavigate()
  const handleSubmit = async e => {
    e.preventDefault()
    const {username, email, password} = formData
    if (isSignUp) {
      const existingUser = allUsers.filter(
        user => user.email === email || user.username === username,
      )
      if (existingUser.length) {
        toast('user already exists', {
          icon: '😔',
        })
        return
      }

      const hashedPassword = encode(password)
      const user = {username, email, password: hashedPassword}
      setAllUsers([...allUsers, user])
      setCurrentUser(user)
      toast.success(`Welcome ${user.username}`)
      navigate('/')
    } else {
      const {nameorEmail, password} = formData

      const existingUser = allUsers.filter(
        user => user.email === nameorEmail || user.username === nameorEmail,
      )
      if (existingUser.length) {
        const isVerified = password !== decode(existingUser[0].password)
        if (!!isVerified) {
          toast.error('Invalid Crediantials!')
        } else {
          setCurrentUser(existingUser[0])
          toast.success(`Welcome ${existingUser[0].username}`)
          navigate('/')
        }
      } else {
        toast.error('Try Again!')
      }
    }
  }
  const handleChange = e => {
    const {name, value} = e.target
    setFormData(prevdata => ({...prevdata, [name]: value}))
  }
  const handleShowPassword = () => {
    setShowPassword(prevState => !prevState)
  }
  const switchMode = () => {
    setIsSignUp(prevState => !prevState)
  }
  const handleCopy = (field, value) => {
    navigator.clipboard.writeText(value)
    toast.success(`${field} copied! `)
  }
  return (
    <>
      <Typography
        sx={{
          fontWeight: '500',
          color: ' rgba(107, 108, 112, 1)',
          letterSpacing: '0.03rem',
          fontSize: '14px',
        }}
      >
        {isSignUp ? 'Sign Up' : 'Welcome Back'}
      </Typography>
      <Typography
        sx={{
          fontWeight: '600',
          mt: '8px',
          lineHeight: '22px',
          fontSize: '18px',
        }}
      >
        {isSignUp ? 'Create an account to continue' : 'Log into your account'}
      </Typography>
      <form style={{marginTop: '45px'}} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {!isSignUp && (
            <Input
              name="nameorEmail"
              label="Email or Username"
              handleChange={handleChange}
              placeholder="Enter your email or username"
            />
          )}
          {isSignUp && (
            <>
              <Input
                name="email"
                label={isSignUp ? 'Email' : 'Email or Username'}
                handleChange={handleChange}
                type="email"
                placeholder="Enter your email"
              />
              <Input
                name="username"
                label="Username"
                handleChange={handleChange}
                placeholder="Choose a preferred username"
              />
            </>
          )}
          <Input
            name="password"
            label="Password"
            handleChange={handleChange}
            type={showPassword ? 'text' : 'password'}
            handleShowPassword={handleShowPassword}
            placeholder={isSignUp ? 'Choose a strong password' : 'Enter your password'}
          />
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            margin: '20px 0 15px',
            backgrounColor: ' rgba(74, 150, 255, 1)',
          }}
        >
          {isSignUp ? 'Continue' : 'Login now'}
        </Button>
        {!isSignUp && (
          <Box
            sx={{
              color: 'rgba(197, 199, 202, 1)',
              my: '10px',
            }}
          >
            <Typography sx={{mb: '5px', fontSize: '14px'}}>
              You can use this Test Account:
            </Typography>

            <Chip
              label=" username: Now&Me"
              icon={<ContentCopyIcon sx={{fontSize: '12px'}} />}
              onClick={() => handleCopy('username', 'Now&Me')}
              sx={{
                color: 'inherit',
                border: '1px solid grey',
                fontSize: '12px',
                my: '5px',
              }}
            />
            <Chip
              label="email: test@user"
              icon={<ContentCopyIcon sx={{fontSize: '12px'}} />}
              onClick={() => handleCopy('email', 'test@user')}
              sx={{
                color: 'inherit',
                border: '1px solid grey',
                m: '5px',
                fontSize: '12px',
              }}
            />
            <Chip
              label="password: 1234"
              icon={<ContentCopyIcon sx={{fontSize: '12px'}} />}
              onClick={() => handleCopy('password', '1234')}
              sx={{
                color: 'inherit',
                border: '1px solid grey',
                fontSize: '12px',
                my: '5px',
              }}
            />
          </Box>
        )}
        <div style={{display: 'flex', justifyContent: 'center'}}></div>
        <Grid container justifyContent="flex-start">
          <Grid item>
            <Typography sx={{color: 'rgba(127, 128, 132, 1)'}}>
              {isSignUp ? 'Already have an Account?' : 'Not registered yet?'}
              <Button
                onClick={switchMode}
                color="primary"
                sx={{
                  padding: 0,
                  ml: '2px',
                  mt: '-2px',
                  color: 'rgba(197, 199, 202, 1)',
                  textTransform: 'none',
                }}
              >
                {isSignUp ? 'Login ' : 'Register'}
                <ArrowForwardIcon fontSize="small" sx={{mt: '-1px'}} />
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </>
  )
}

export default AuthForm
