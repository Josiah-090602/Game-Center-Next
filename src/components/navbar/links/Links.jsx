'use client'
import React, { useState } from 'react'
import { Box, Link, Stack, Button, Typography } from '@mui/material'
import NavLink from './navLinks/navLink'

export default function Links() {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Store', path: '/store' },
    { name: 'News', path: '/news' },
  ]

  return (
    <Box>
      <Stack
        display={{ md: 'flex' }}
        direction={{ md: 'row', xs: 'column' }}
        color="inherit"
        spacing={3}
      >
        {navLinks.map(link => (
          <NavLink key={link.name} link={link} />
        ))}
      </Stack>
    </Box>
  )
}
