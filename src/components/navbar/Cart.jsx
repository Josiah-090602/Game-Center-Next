import React from 'react'
import { IconButton, Badge } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useSelector } from 'react-redux'

export default function Cart() {
  const cart = useSelector(state => state.products.carts)

  return (
    <>
      <Badge badgeContent={cart.length} color="secondary">
        <IconButton color="primary" href="/cart">
          <ShoppingCartIcon />
        </IconButton>
      </Badge>
    </>
  )
}
