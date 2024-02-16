'use client'
import React, { useState } from 'react'
import { Box, Typography, Stack, IconButton } from '@mui/material'
import Links from './links/Links'
import AdjustIcon from '@mui/icons-material/Adjust'
import Profile from './Profile'
import Cart from './Cart'
import MenuIcon from '@mui/icons-material/Menu'

export default function NavBar() {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          bgcolor: 'secondary.dark',
          height: '5rem',
          color: 'secondary.contrastText',
          paddingX: { lg: '10rem', md: '8rem', sm: '5rem', xs: '2rem' },
        }}
      >
        <Box
          sx={{ display: 'flex', alignItems: 'center', color: 'primary.dark' }}
        >
          <AdjustIcon fontSize="medium" />
          <Typography variant="h5" color="white">
            <span style={{ color: '#CB5652', fontWeight: '700' }}>SHOP</span>
            Center
          </Typography>
        </Box>

        <Box display={{ md: 'none', sm: 'flex' }}>
          <IconButton color="primary">
            <MenuIcon />
          </IconButton>
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
    </div>
  )
}
