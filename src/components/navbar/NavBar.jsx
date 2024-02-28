'use client'
import React, { useState } from 'react'
import { Box } from '@mui/material'
import Links from './links/Links'
import Profile from './Profile'
import Cart from './Cart'
import Logo from './Logo'
import SideDrawer from './SideDrawer'

export default function NavBar() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          bgcolor: 'secondary.dark',
          height: '5rem',
          color: 'secondary.contrastText',
          paddingX: { lg: '10rem', md: '8rem', sm: '5rem', xs: '2rem' },
          position: 'fixed',
          width: '100%',
          boxSizing: 'border-box',
          zIndex: '100',
        }}
      >
        {' '}
        <Logo />
        <Box display={{ md: 'none', sm: 'flex' }}>
          <SideDrawer />
        </Box>
        <Box
          display={{ md: 'flex', xs: 'none' }}
          alignItems="center"
          gap="1.5rem"
        >
          <Links />
          <Cart />
          <Profile />
        </Box>
      </Box>
    </>
  )
}
