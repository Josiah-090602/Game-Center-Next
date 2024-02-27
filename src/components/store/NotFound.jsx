import React from 'react'
import { Box, Typography } from '@mui/material'

export default function NotFound() {
  return (
    <Box
      display="flex"
      sx={{
        width: '100%',
        height: '74.5vh',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 2,
        opacity: 0.5,
      }}
    >
      <img src="/notfound.svg" alt="" width="200px" />
      <Typography variant="h6" color="initial">
        Item Not Found
      </Typography>
    </Box>
  )
}
