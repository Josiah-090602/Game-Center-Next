import React from 'react'
import { Box, Typography } from '@mui/material'
import AdjustIcon from '@mui/icons-material/Adjust'

export default function Logo() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', color: 'primary.dark' }}>
      <AdjustIcon fontSize="medium" />
      <Typography variant="h5" color="white">
        <span style={{ color: '#CB5652', fontWeight: '700' }}>SHOP</span>
        Center
      </Typography>
    </Box>
  )
}
