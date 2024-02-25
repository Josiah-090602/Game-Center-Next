'use client'
import React from 'react'
import { Typography, Box } from '@mui/material'
import { useSelector } from 'react-redux'
import PreviewItem from '@/components/store/previewPage/PreviewItem'
import OtherProducts from '@/components/store/previewPage/OtherProducts'

export default function ProductDetails({ params }) {
  const products = useSelector(state => state.products.data)

  const item = products.find(product => product.id === Number(params.productId))

  return (
    <>
      <Box
        display="flex"
        sx={{ border: '1px solid black', p: 2, flexDirection: 'column' }}
      >
        <PreviewItem item={item} />
        {/* <OtherProducts items={products} /> */}
      </Box>
    </>
  )
}
