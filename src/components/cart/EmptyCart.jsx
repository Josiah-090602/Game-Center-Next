import React from 'react'
import { Box, Typography } from '@mui/material'

export default function EmptyCart() {
  return (
    <>
      <Box
        display="flex"
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '20px',
          opacity: 0.5,
        }}
      >
        <img src="/emptycart.svg" alt="" width="300px" />
        <Typography variant="h6" color="initial">
          There's no item in you cart
        </Typography>
      </Box>
    </>
  )
}
