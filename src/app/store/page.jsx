'use client'
import React, { useEffect, useState } from 'react'
import { Typography, Divider, Box } from '@mui/material'
import Discounts from '../../components/navbar/store/Discounts'
import Items from '../../components/navbar/store/Items'
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

  console.log(products.data)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: '100%' }}>
      <Discounts />

      <Typography variant="h5" color="initial" sx={{ marginY: '2rem' }}>
        Top Products
      </Typography>
      <Items productData={products.data} />
    </Box>
  )
}
