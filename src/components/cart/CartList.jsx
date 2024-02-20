import React from 'react'
import { Typography, Box } from '@mui/material'
import CartItem from './CartItem'

export default function CartList({ cartItems }) {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          border: '1px solid blue',
          padding: '10px',
          maxHeight: '80%',

          boxSizing: 'border-box',
        }}
      >
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </Box>
    </>
  )
}
