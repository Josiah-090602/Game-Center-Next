import React, { useEffect } from 'react'
import { Box, Container, Button, Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { getTotalPrice } from '@/redux/productSlice'

export default function CheckOut() {
  const cart = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotalPrice())
  }, [cart, cart.checked])

  console.log(cart.carts.length)
  return (
    <Box
      display="flex"
      sx={{
        justifyContent: 'end',
        height: '14vh',
        alignItems: 'center',
        p: 2,
        borderTop: cart.carts.length >= 3 && '1px solid #e0e0e0',
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', sm: '20rem' },
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <Box
          display="flex"
          sx={{ width: '100%', justifyContent: 'space-between' }}
        >
          <Typography variant="subtitle1" color="initial" fontSize="1.5rem">
            Subtotal
          </Typography>

          <Typography
            variant="subtitle1"
            color="initial"
            fontSize="1.5rem"
            fontWeight="bold"
          >
            ${cart.cartsTotalPrice.toFixed(2)}
          </Typography>
        </Box>
        <Typography variant="caption" color="initial" sx={{ opacity: '0.7' }}>
          Taxes and Shipping calculated at Checkout
        </Typography>
        <Button
          disableElevation
          variant="contained"
          color="secondary"
          sx={{ width: '100%', p: 1, borderRadius: '0' }}
        >
          Check Out
        </Button>
      </Box>
    </Box>
  )
}
