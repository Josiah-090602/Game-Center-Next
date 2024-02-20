import React from 'react'
import { Box, Button, Typography } from '@mui/material'

export default function Quantity({ item }) {
  return (
    <>
      <Box
        display="flex"
        height="40px"
        width="fit-content"
        sx={{
          gap: '5px',
          border: '1px solid',
          borderColor: 'primary.main',
          borderRadius: '5px',
          overflow: 'hidden',
        }}
      >
        <Button
          disableElevation
          sx={{
            height: '40px',
            minWidth: 'fit-content',
            borderRadius: '0',
            border: '1px solid',
            borderColor: 'primary.main',
          }}
          variant="contained"
          color="primary"
        >
          -
        </Button>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            minHeight: '40px',
            width: '50px',
            justifyContent: 'center',
          }}
        >
          <Typography variant="body1" color="initial">
            {item.quantity}
          </Typography>
        </Box>
        <Button
          disableElevation
          variant="contained"
          color="primary"
          sx={{
            height: '40px',
            minWidth: 'fit-content',
            borderRadius: '0',
            border: '1px solid',
            borderColor: 'primary.main',
          }}
        >
          +
        </Button>
      </Box>
    </>
  )
}
