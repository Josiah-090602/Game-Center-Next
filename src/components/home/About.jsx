import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

export default function About({ boxStyles }) {
  return (
    <Stack
      spacing={{ md: 2, xs: 0 }}
      direction={{ md: 'row', xs: 'column-reverse' }}
      width="100%"
    >
      <Box
        width={{ md: '50%', xs: '100%' }}
        sx={{
          ...boxStyles,
          alignItems: 'left',
          textAlign: { md: 'left', xs: 'center' },
          padding: { md: '3rem', xs: '2rem' },
        }}
      >
        <Typography variant="h4" color="secondary.dark">
          About Us
        </Typography>
        <Typography
          variant="subtitle1"
          fontSize={{ md: '1rem', xs: '0.9rem' }}
          marginTop={2}
          color="secondary.dark"
        >
          Welcome to <strong>ShopCenter</strong> , your one-stop destination for
          the latest in men’s and women’s apparel, cutting-edge electronics, and
          exquisite jewelry. Our diverse range of products is carefully curated
          to cater to the unique tastes and needs of our customers.
        </Typography>
      </Box>

      <Box
        sx={{
          width: { md: '50%', xs: '100%' },
          height: { md: '500px', xs: '300px' },
          backgroundSize: 'cover',
          backgroundPosition: { md: 'center', xs: 'top' },
          backgroundImage: `url(/about1.jpg)`,
        }}
      ></Box>
    </Stack>
  )
}
