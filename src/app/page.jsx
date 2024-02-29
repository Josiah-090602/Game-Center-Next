import React from 'react'
import { Box, Typography } from '@mui/material'
import Intro from '@/components/home/Intro'
import Sponsors from '@/components/home/Sponsors'
import About from '@/components/home/About'
import Reasons from '@/components/home/Reasons'
import Brands from '@/components/home/Brands'
import Customer from '@/components/home/Customer'
import ContactForm from '@/components/home/ContactForm'

const boxStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxSizing: 'border-box',
  flexDirection: 'column',
  p: 0,
  gap: 4,
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Box
        sx={{
          height: '92vh',
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

      {/* //About Us */}
      <Box sx={{ ...boxStyles }}>
        <About boxStyles={boxStyles} />
      </Box>

      {/* Why Choose Us */}
      <Box
        sx={{
          ...boxStyles,
          bgcolor: 'grey.100',
          padding: { md: 4, xs: '2rem' },
        }}
      >
        <Typography variant="h4" color="secondary.dark">
          Why Choose Us?
        </Typography>
        <Reasons />
      </Box>
      {/*Our Happy customers*/}
      <Box
        sx={{
          ...boxStyles,
          bgcolor: 'grey.100',
          padding: 4,
        }}
      >
        <Typography variant="h4" color="secondary.dark">
          Feedbacks
        </Typography>
        <Customer />
      </Box>

      {/* Partners */}
      <Box sx={{ ...boxStyles, padding: 4 }}>
        <Typography
          variant="h4"
          color="secondary.dark"
          textAlign="center"
          padding="1rem"
        >
          Our Partners
        </Typography>

        <Brands />
      </Box>
      {/* //Sponsors */}
      <Box
        sx={{
          ...boxStyles,
          bgcolor: 'grey.200',
          flexDirection: 'column',

          padding: 4,
        }}
      >
        <Typography variant="h4" color="secondary.dark">
          Our Sponsors
        </Typography>

        <Sponsors />
      </Box>

      {/*Reach Us*/}
      <Box
        sx={{
          ...boxStyles,
          padding: 4,
        }}
      >
        <ContactForm />
      </Box>
    </>
  )
}
