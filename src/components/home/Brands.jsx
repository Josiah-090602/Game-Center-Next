import React from 'react'
import { Grid, Box } from '@mui/material'

const brands = [
  '/brands/nike.svg',
  '/brands/adidas.svg',
  '/brands/zara.svg',
  '/brands/chanel.svg',
  '/brands/intel.svg',
  '/brands/lenovo.svg',
  '/brands/hp.svg',
  '/brands/amd.svg',
]

export default function Brands() {
  return (
    <Grid width=" 80%" container spacing={3} columns={{ xs: 2, md: 4, sm: 3 }}>
      {brands.map((brand, index) => (
        <Grid item key={index} sx={{ boxSizing: 'border-box' }} xs={1}>
          <Box
            sx={{
              opacity: '1',
              backgroundImage: `url(${brand})`,
              height: { md: '150px', sm: '100px', xs: '80px' },
              objectFit: 'cover',
              backgroundSize: '40%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundColor: '#dfdbcf',
              filter: 'invert(100%)',
            }}
          ></Box>
        </Grid>
      ))}
    </Grid>
  )
}
