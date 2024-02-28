import React from 'react'
import { Button, ButtonGroup, Box, TextField } from '@mui/material'

export default function FilterGroup({
  activeFilter,
  setActiveFilter,
  searchQuery,
  searchOnChage,
}) {
  const buttonStyles = { fontSize: { md: '0.8rem', xs: '0.7rem' } }
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        boxSizing="border-box"
        flexDirection={{ md: 'row', xs: 'column-reverse' }}
        gap={1}
        width="100%"
        position="sticky"
        paddingTop={2}
        top={80}
        bgcolor="grey.100"
        zIndex={1}
      >
        <ButtonGroup
          disableElevation
          color="secondary"
          sx={{ height: '40px !important' }}
          aria-label=""
        >
          <Button
            variant={!activeFilter ? 'contained' : 'outlined'}
            onClick={() => setActiveFilter('')}
            sx={buttonStyles}
          >
            All
          </Button>
          <Button
            variant={
              activeFilter === "men's clothing" ? 'contained' : 'outlined'
            }
            onClick={() => setActiveFilter("men's clothing")}
            sx={buttonStyles}
          >
            Mens
          </Button>
          <Button
            variant={
              activeFilter === "women's clothing" ? 'contained' : 'outlined'
            }
            onClick={() => setActiveFilter("women's clothing")}
            sx={buttonStyles}
          >
            Womens
          </Button>
          <Button
            variant={activeFilter === 'jewelery' ? 'contained' : 'outlined'}
            onClick={() => setActiveFilter('jewelery')}
            sx={buttonStyles}
          >
            Jewelries
          </Button>
          <Button
            variant={activeFilter === 'electronics' ? 'contained' : 'outlined'}
            onClick={() => setActiveFilter('electronics')}
            sx={buttonStyles}
          >
            Electronics
          </Button>
        </ButtonGroup>

        <TextField
          value={searchQuery}
          label="Search Product"
          variant="outlined"
          sx={{ width: { md: '40%', xs: '100%' }, minHeight: '50px' }}
          color="secondary"
          onChange={searchOnChage}
          size="small"
        />
      </Box>
    </>
  )
}
