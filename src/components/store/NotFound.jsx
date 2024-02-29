import React from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'

export default function NotFound() {
  return (
    <Box
      display="flex"
      sx={{
        width: '100%',
        height: 'calc(100vh - 15rem)',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 2,
        opacity: 0.5,
      }}
    >
      <img src="/notfound.svg" alt="" width="300px" />
      <Typography variant="h6" color="initial">
        Item Not Found
      </Typography>
    </Box>
  )
}
