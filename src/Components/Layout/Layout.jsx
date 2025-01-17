import {Box} from '@mui/material'
import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const Layout = () => {
  return (
    <Box className="rootContainer">
      <Navbar />
      <Outlet />
    </Box>
  )
}

export default Layout
