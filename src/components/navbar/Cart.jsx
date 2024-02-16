import React from 'react'
import IconButton from '@mui/material/IconButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
export default function Cart() {
  return (
    <div>
      <IconButton color="primary" href="/cart">
        <ShoppingCartIcon />
      </IconButton>
    </div>
  )
}
