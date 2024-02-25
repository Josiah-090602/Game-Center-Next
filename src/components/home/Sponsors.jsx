import React from 'react'

import { Grid, Box, Paper } from '@mui/material'

const logoStyles = {
  width: '100%',
}

const logos = [
  '/sponsors/microsoft.svg',
  '/sponsors/whatsapp.svg',
  '/sponsors/slack.svg',
  '/sponsors/uber.svg',
]

export default function Sponsors() {
  return (
    <Box width="70%" sx={{ boxSizing: 'border-box' }}>
      <Grid container spacing={1} columns={{ md: 4, sm: 2, xs: 1 }}>
        {logos.map((logo, index) => (
          <Grid item key={index} xs={1}>
            <Paper
              elevation={0}
              sx={{
                opacity: 0.7,
                transition: 'opacity 0.3s',
                padding: 2,
                height: '50px',
                backgroundImage: `url(${logo})`,
                objectFit: 'cover',
                backgroundSize: '45%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                '&:hover': {
                  opacity: 1,
                },
              }}
            >
              {/* <img src={logo} alt="sponsor" style={logoStyles} /> */}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
