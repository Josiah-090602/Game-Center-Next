'use client'
import React from 'react'
import { Button, Grid } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

export default function Actions({ onClick }) {
  return (
    <>
      <Button
        disableElevation
        aria-label=""
        color="primary"
        variant="contained"
        sx={{ minWidth: '100%', height: '40px' }}
        onClick={onClick}
      >
        {' '}
        <ShoppingCartIcon fontSize="small" sx={{ marginRight: 1 }} />
        Add to cart
      </Button>
    </>
  )
}
