import React from 'react'
import { Container, Box, Grid } from '@mui/material'
import ProductCard from './ProductCard'

export default function Items({ productData, activeFilter }) {
  const filteredData = productData.filter(
    product => product.category === activeFilter || activeFilter === '',
  )

  return (
    //Top Rated

    <>
      <Box maxWidth="100%" display="flex" alignItems="center">
        <Grid
          container
          spacing={1}
          boxSizing="border-box"
          columns={{ xl: '5', lg: '5', md: '4', sm: '2', xs: '1' }}
        >
          {filteredData.map(product => (
            <Grid item key={product.id} xs={1}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}
