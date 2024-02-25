import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Intro from '@/components/home/Intro'
import Sponsors from '@/components/home/Sponsors'

const boxStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxSizing: 'border-box',
  padding: { md: '4rem', xs: '2rem' },
}

export default function Home() {
  return (
    <>
      <Box
        sx={{
          height: '70vh',
          backgroundImage: 'url(/heroBackground.png)',
          objectFit: 'cover',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          ...boxStyles,
        }}
      >
        <Intro />
      </Box>

      <Box
        sx={{
          ...boxStyles,
          bgcolor: 'grey.200',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        <Typography variant="h4" color="secondary.dark">
          OUR SPONSORS
        </Typography>

        <Sponsors />
      </Box>

      <Box sx={{ ...boxStyles }}>
        <Stack spacing={3} direction={{ md: 'row', xs: 'column-reverse' }}>
          <Box
            width={{ md: '50%', xs: '100%' }}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography variant="h4" color="secondary.dark">
              About Us
            </Typography>
            <Typography
              variant="subtitle1"
              fontSize={{ md: '1.2rem', xs: '1rem' }}
              color="secondary.dark"
            >
              Welcome to <strong>SHOPCenter!</strong> We’re more than just an
              online shop; we’re a<br /> vibrant community of style enthusiasts,
              trendsetters, and quality seekers. Let us introduce ourselves:
            </Typography>
          </Box>

          <Box sx={{ width: { md: '50%', xs: '100%' } }}>
            <img
              src="/about1.jpg"
              alt="hero"
              style={{ width: '100%', borderRadius: '1rem' }}
            />
          </Box>
        </Stack>
        {/* {/* <img src="/about2.jpg" alt="hero" style={{ width: '100%' }} /> */}
      </Box>
    </>
  )
}
