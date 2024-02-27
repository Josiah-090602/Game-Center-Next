import React from 'react'
import { Container, Box, Grid } from '@mui/material'
import ProductCard from './ProductCard'
import NotFound from './NotFound'

export default function Items({ productData, activeFilter }) {
  const filteredData = productData.filter(
    product => product.category === activeFilter || activeFilter === '',
  )

  return (
    //Top Rated
    <>
      <Box maxWidth="100%" display="flex" alignItems="center">
        {filteredData.length === 0 ? (
          <NotFound />
        ) : (
          <Grid
            height={filteredData.length <= 5 ? '75.4vh' : 'auto'}
            container
            spacing={1}
            boxSizing="border-box"
            columns={{ xl: '5', lg: '4', md: '3', sm: '2', xs: '1' }}
          >
            {filteredData.map(product => (
              <Grid item key={product.id} xs={1}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </>
  )
}
