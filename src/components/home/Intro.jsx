import React from 'react'
import { Typography, Box, Button } from '@mui/material'

export default function Intro() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" color="secondary.contrastText">
          Welcome to
        </Typography>

        <Typography variant="h3" color="primary.dark">
          <strong>SHOP</strong>
          <span style={{ color: 'white' }}>Center</span>
        </Typography>

        <Typography
          variant="caption"
          fontSize={{ md: '1rem', sm: '0.8rem', xs: '0.7rem' }}
          color="secondary.contrastText"
          textAlign="center"
        >
          “Where Trends Collide: Explore Fashion, Electronics, and More!”
        </Typography>

        <Button
          variant="contained"
          color="primary"
          disableElevation
          href="/store"
          sx={{ borderRadius: '0', width: '10rem', marginTop: '1rem' }}
        >
          Let's Shop
        </Button>
      </Box>
    </>
  )
}
