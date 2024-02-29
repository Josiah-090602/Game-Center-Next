import React, { useState } from 'react'
import { Typography, Box, Checkbox, Button } from '@mui/material'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { checkAllProducts, clearCartItems } from '@/redux/productSlice'

export default function CartList({ cartItems }) {
  const dispatch = useDispatch()

  const handleCheckAll = () => {
    dispatch(checkAllProducts(cartItems))
  }
  const handleClear = () => {
    dispatch(clearCartItems())
  }

  const checked = cartItems.every(item => item.checked === true)

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <Checkbox
            label="Select All"
            onChange={handleCheckAll}
            checked={checked}
          />
          <Typography>Select All</Typography>
        </Box>

        <Box>
          <Button onClick={handleClear} variant="outlined" color="secondary">
            Clear Cart
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          padding: '10px',
          overflowY: 'scroll',
          scrollBehavior: 'smooth',
          height: 'calc(100vh - 57.5vh)',
          scrollbarWidth: cartItems.length > 2 ? 'thin' : 'none',
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
