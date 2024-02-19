import React from 'react'
import { Button } from '@mui/material'

export default function News() {
  return (
    <div>
      <Button
        sx={{ borderRadius: '10px' }}
        variant="contained"
        disableElevation
      >
        {' '}
        Buy Now
      </Button>
    </div>
  )
}
