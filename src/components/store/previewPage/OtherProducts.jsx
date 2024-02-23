import React from 'react'
import { Box, Grid } from '@mui/material'
import ProductCard from '@/components/store/ProductCard'

export default function OtherProducts({ items }) {
  return (
    <Box maxWidth="100%" display="flex" alignItems="center">
      <Grid
        container
        spacing={1}
        boxSizing="border-box"
        columns={{ xl: '5', lg: '5', md: '4', sm: '2', xs: '1' }}
      >
        {items.map(product => (
          <Grid item key={product.id} xs={1}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
