'use client'
import React from 'react'
import { Typography, Box, IconButton } from '@mui/material'
import { useSelector } from 'react-redux'
import PreviewItem from '@/components/store/previewPage/PreviewItem'
import OtherProducts from '@/components/store/previewPage/OtherProducts'
import newArrivals from '@/components/store/newArrivals'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export default function ProductDetails({ params }) {
  const products = useSelector(state => state.products.data)

  const combinedData = [...products, ...newArrivals]

  const item = combinedData.find(
    product => product.id === Number(params.productId),
  )
  console.log(item)

  return (
    <>
      <Box
        display="flex"
        sx={{
          border: '1px solid black',
          paddingX: {
            lg: '15rem',
            md: '8rem',
            sm: '1rem',
            xs: '1rem',
          },
          paddingY: '2rem',
          flexDirection: 'column',
          bgcolor: 'grey.100',
        }}
      >
        <PreviewItem item={item} />
        <OtherProducts items={products} itemPreview={item} />
      </Box>
    </>
  )
}
