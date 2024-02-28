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
        <Typography
          variant="h5"
          color="secondary.contrastText"
          sx={{ fontSize: { md: '2rem', xs: '1.5rem' } }}
        >
          Welcome to
        </Typography>

        <Typography
          variant="h3"
          color="primary.dark"
          sx={{ fontSize: { md: '3.5rem', sm: '3rem', xs: '2rem' } }}
        >
          <strong>SHOP</strong>
          <span style={{ color: 'white' }}>Center</span>
        </Typography>

        <Typography
          variant="caption"
          fontSize={{ md: '1rem', sm: '0.8rem', xs: '0.7rem' }}
          color="secondary.contrastText"
          textAlign="center"
        >
          Where Trends Collide: Explore Fashion, Electronics, and More!
        </Typography>

        <Button
          variant="contained"
          color="primary"
          disableElevation
          href="/store"
          sx={{ borderRadius: '0', width: '10rem', marginTop: '1rem' }}
        >
          Let&apos;s Shop
        </Button>
      </Box>
    </>
  )
}
