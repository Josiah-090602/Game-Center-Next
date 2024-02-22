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

          padding: '10px',
          overflowY: 'scroll',
          scrollBehavior: 'smooth',
          height: '80%',
          scrollbarWidth: cartItems.length > 3 ? 'thin' : 'none',
        }}
      >
        {cartItems.map(item => (
          // <p key={item.id}>{item.title}</p>
          <CartItem key={item.id} item={item} />
        ))}
      </Box>
    </>
  )
}
