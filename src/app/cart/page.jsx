'use client'
import React from 'react'
import { Typography, Box, Divider, Container } from '@mui/material'
import { useSelector } from 'react-redux'
import CartList from '@/components/cart/CartList'
import EmptyCart from '@/components/cart/EmptyCart'

export default function Cart() {
  const cart = useSelector(state => state.products.carts)

  return (
    <>
      <Box
        sx={{
          height: '100vh',
          p: 4,
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
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

        <Box
          sx={{
            border: '1px solid red',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {cart.length === 0 ? <EmptyCart /> : <CartList cartItems={cart} />}
        </Box>
      </Box>
    </>
  )
}
