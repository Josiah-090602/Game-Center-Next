'use client'
import React from 'react'
import { Typography, Box, Divider } from '@mui/material'

import { useDispatch, useSelector } from 'react-redux'
import CartList from '@/components/cart/CartList'
import { IceSkatingRounded } from '@mui/icons-material'

export default function Cart() {
  const cart = useSelector(state => state.products.carts)

  console.log(cart)

  return (
    <>
      <Box
        sx={{
          minHeight: '100vh',
          border: '1px solid red',
          p: 3,
          boxSizing: 'border-box',
        }}
      >
        <Typography variant="h5" color="secondary.dark">
          <strong> My Shopping Cart</strong>
        </Typography>
        <Divider
          variant="fullWidth"
          orientation="horizontal"
          sx={{ marginY: '1rem' }}
        />

        <CartList cartItems={cart} />
      </Box>
    </>
  )
}
