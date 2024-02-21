import React from 'react'
import { Typography, Box } from '@mui/material'

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          height: '4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'secondary.dark',
          color: 'secondary.contrastText',
        }}
      >
        <Typography variant="body1" color="inherit">
          &copy; 2024. All rights reserved
        </Typography>
      </Box>
    </>
  )
}
