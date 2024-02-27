import React from 'react'
import { Box, Typography, Grid } from '@mui/material'

export default function OtherEvents() {
  return (
    <Box display="flex" height="30vh" marginTop={0}>
      <Grid container spacing={2} boxSizing="border-box">
        <Grid item sm={6} xs={12}>
          <Box
            height="100%"
            sx={{
              backgroundImage: 'url(/events/SalesDay.png)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          ></Box>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Box
            height="100%"
            sx={{
              backgroundImage: 'url(/events/NewArrival.png)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          ></Box>
        </Grid>
      </Grid>
    </Box>
  )
}
