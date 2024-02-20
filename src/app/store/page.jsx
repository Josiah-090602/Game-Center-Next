'use client'
import React, { useEffect } from 'react'
import { Typography, Box } from '@mui/material'
import Discounts from '../../components/store/Discounts'
import Items from '../../components/store/Items'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsAsync } from '@/redux/productSlice'

export default function Store() {
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    if (products.status === 'idle') {
      dispatch(fetchProductsAsync())
    }
  }, [products.status, dispatch])

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', minWidth: '100%', p: 1 }}
    >
      <Discounts />

      <Typography variant="h5" color="initial" sx={{ marginY: '2rem' }}>
        Top Products
      </Typography>

      <Items productData={products.data.response} />
    </Box>
  )
}
