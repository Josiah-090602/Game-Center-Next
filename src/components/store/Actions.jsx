'use client'
import React from 'react'
import { Button, Grid } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

export default function Actions({ onClick }) {
  return (
    <>
      <Grid container spacing={0.5}>
        <Grid item md={8} xs={12}>
          <Button
            disableElevation
            size="small"
            variant="contained"
            sx={{ width: '100%' }}
          >
            Buy Now
          </Button>
        </Grid>
        <Grid item md={4} xs={12}>
          <Button
            disableElevation
            aria-label=""
            color="secondary"
            variant="contained"
            sx={{ minWidth: '100%' }}
            onClick={onClick}
          >
            <ShoppingCartIcon fontSize="small" />
          </Button>
        </Grid>
      </Grid>
    </>
  )
}
