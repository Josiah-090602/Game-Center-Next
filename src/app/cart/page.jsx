'use client'
import React from 'react'
import { Typography, Box, Divider, Container, Button } from '@mui/material'
import { useSelector } from 'react-redux'
import CartList from '@/components/cart/CartList'
import EmptyCart from '@/components/cart/EmptyCart'
import { Check } from '@mui/icons-material'
import CheckOut from '@/components/cart/CheckOut'

export default function Cart() {
  const cart = useSelector(state => state.products.carts)

  return (
    <>
      <Box
        sx={{
          height: '85.5vh',
          p: 4,

          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h5" color="secondary.dark">
            <strong> My Shopping Cart</strong>
          </Typography>

          <Button variant="outlined" color="primary" href="/store">
            Continue Shopping
          </Button>
        </Box>

        <Divider
          variant="fullWidth"
          orientation="horizontal"
          sx={{ marginY: '1rem' }}
        />

        {cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <CartList cartItems={cart} />
            <CheckOut cartItems={cart} />{' '}
          </>
        )}
      </Box>
    </>
  )
}
