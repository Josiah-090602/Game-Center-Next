'use client'
import React from 'react'
import { Typography, Box } from '@mui/material'
import { useSelector } from 'react-redux'
import PreviewItem from '@/components/store/previewPage/PreviewItem'

export default function ProductDetails({ params }) {
  const products = useSelector(state => state.products.data)

  const item = products.find(product => product.id === Number(params.productId))

  return (
    <>
      <Box display="flex" sx={{ border: '1px solid black', p: 1 }}>
        <PreviewItem item={item} />
      </Box>
    </>
  )
}
