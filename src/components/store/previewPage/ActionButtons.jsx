import React from 'react'
import { Button, Box } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

export default function ActionButtons({ preOrder, buyNow }) {
  const style = {
    width: '200px',
    height: '60px',
    borderRadius: '0',
  }
  return (
    <>
      <Box display="flex" sx={{ gap: 2 }}>
        <Button
          sx={style}
          disableElevation
          variant="outlined"
          color="primary"
          onClick={preOrder}
        >
          <ShoppingCartIcon fontSize="small" sx={{ marginRight: 0.5 }} />
          Add to Cart
        </Button>

        <Button
          onClick={buyNow}
          sx={style}
          disableElevation
          variant="contained"
          color="primary"
          href="/cart"
          target="_self"
        >
          Buy Now
        </Button>
      </Box>
    </>
  )
}
