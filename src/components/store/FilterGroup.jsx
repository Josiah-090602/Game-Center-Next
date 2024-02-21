import React from 'react'
import { Button, ButtonGroup, Box, TextField } from '@mui/material'

export default function FilterGroup({
  activeFilter,
  setActiveFilter,
  searchQuery,
  searchOnChage,
}) {
  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <ButtonGroup disableElevation color="secondary" aria-label="">
          <Button
            variant={!activeFilter ? 'contained' : 'outlined'}
            onClick={() => setActiveFilter('')}
          >
            All
          </Button>
          <Button
            variant={
              activeFilter === "men's clothing" ? 'contained' : 'outlined'
            }
            onClick={() => setActiveFilter("men's clothing")}
          >
            Mens
          </Button>
          <Button
            variant={
              activeFilter === "women's clothing" ? 'contained' : 'outlined'
            }
            onClick={() => setActiveFilter("women's clothing")}
          >
            Womens
          </Button>
          <Button
            variant={activeFilter === 'jewelery' ? 'contained' : 'outlined'}
            onClick={() => setActiveFilter('jewelery')}
          >
            Jewelries
          </Button>
          <Button
            variant={activeFilter === 'electronics' ? 'contained' : 'outlined'}
            onClick={() => setActiveFilter('electronics')}
          >
            Electronics
          </Button>
        </ButtonGroup>

        <TextField
          value={searchQuery}
          label="Search Product"
          variant="outlined"
          sx={{ width: '30%' }}
          color="secondary"
          onChange={searchOnChage}
        />
      </Box>
    </>
  )
}
