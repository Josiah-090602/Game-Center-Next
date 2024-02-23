import React, { useState } from 'react'
import { Typography, Box, Checkbox } from '@mui/material'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { checkAllProducts } from '@/redux/productSlice'

export default function CartList({ cartItems }) {
  const dispatch = useDispatch()

  const handleCheckAll = () => {
    dispatch(checkAllProducts(cartItems))
  }

  const checked = cartItems.every(item => item.checked === true)

  return (
    <>
      <Box display="flex" alignItems="center">
        <Checkbox
          label="Selec All"
          onChange={handleCheckAll}
          checked={checked}
        />
        <Typography>Select All</Typography>
      </Box>
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
