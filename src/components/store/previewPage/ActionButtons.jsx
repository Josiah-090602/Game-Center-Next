import React from 'react'
import { Button, Box } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

export default function ActionButtons({ count, preOrder, buyNow }) {
  const style = {
    width: { md: '200px', xs: '100%' },
    height: '60px',
    borderRadius: '0',
  }

  return (
    <>
      <Box
        display="flex"
        sx={{ gap: 2, flexDirection: { xs: 'column', md: 'row' } }}
      >
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
          href={count === 0 ? '' : '/cart'}
          target="_self"
        >
          Buy Now
        </Button>
      </Box>
    </>
  )
}
