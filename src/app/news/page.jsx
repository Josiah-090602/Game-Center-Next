'use client'
import React from 'react'
import { Button, Box, Typography, Grid } from '@mui/material'
import Discounts from '@/components/news/Discounts'
import OtherEvents from '@/components/news/OtherEvents'
import ProductCard from '@/components/store/ProductCard'
import newArrivals from '@/components/store/newArrivals'
import { useSelector } from 'react-redux'

export default function News() {
  const products = useSelector(state => state.products)

  const combinedData = [...products.data, ...newArrivals]

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        paddingBottom: 1,
        paddingX: {
          lg: '15rem',
          md: '8rem',
          sm: '1rem',
          xs: '1rem',
        },
        bgcolor: 'grey.100',
        boxSizing: 'border-box',
        gap: { md: 3, xs: 1 },
      }}
    >
      <Discounts />
      <OtherEvents />

      <Box display="flex" flexDirection="column" sx={{ gap: 3 }}>
        <Typography
          variant="h4"
          color="secondary.dark"
          sx={{ fontWeight: 'bold' }}
        >
          What's New
        </Typography>
        <Grid
          container
          spacing={1}
          boxSizing="border-box"
          columns={{ xl: '4', lg: '4', md: '2', sm: '2', xs: '1' }}
        >
          {newArrivals.slice(0, 4).map(product => (
            <Grid item key={product.id} xs={1}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        sx={{ gap: 3 }}
        justifyContent="center"
      >
        <Typography
          variant="h4"
          color="secondary.dark"
          sx={{ fontWeight: 'bold' }}
        >
          Top Trend
        </Typography>
        <Grid
          container
          spacing={1}
          boxSizing="border-box"
          columns={{ xl: '4', lg: '4', md: '2', sm: '2', xs: '1' }}
        >
          {combinedData
            .filter(product => product.rating.count > 400)
            .slice(0, 4)
            .map(product => (
              <Grid item key={product.id} xs={1}>
                <ProductCard product={product} />
              </Grid>
            ))}
        </Grid>
      </Box>

      <Box display="flex" flexDirection="column" sx={{ gap: 3 }}>
        <Typography
          variant="h4"
          color="secondary.dark"
          sx={{ fontWeight: 'bold' }}
        >
          Most Rated
        </Typography>
        <Grid
          container
          spacing={1}
          boxSizing="border-box"
          columns={{ xl: '4', lg: '4', md: '2', sm: '2', xs: '1' }}
        >
          {newArrivals
            .filter(
              product =>
                product.rating.rate > 4.7 && product.rating.count > 100,
            )
            .slice(0, 4)
            .map(product => (
              <Grid item key={product.id} xs={1}>
                <ProductCard product={product} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  )
}
