'use client'
import React from 'react'
import { Typography, Box } from '@mui/material'
import { useSelector } from 'react-redux'
import PreviewItem from '@/components/store/previewPage/PriviewItem'

export default function ProductDetails({ params }) {
  const products = useSelector(state => state.products.data.response)

  const item = products.find(product => product.id == params.productId)

  return (
    <>
      <Box display="flex" sx={{ border: '1px solid black', p: 1 }}>
        <PreviewItem item={item} />
      </Box>
    </>
  )
}
