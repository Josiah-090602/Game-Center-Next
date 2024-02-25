'use client'
import React, { useEffect, useState } from 'react'
import { Typography, Box, ButtonGroup, Button } from '@mui/material'
import Discounts from '../../components/store/Discounts'
import Items from '../../components/store/Items'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsAsync } from '@/redux/productSlice'
import FilterGroup from '@/components/store/FilterGroup'
import Fuse from 'fuse.js'

export default function Store() {
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()

  //Button Filters
  const [activeFilter, setActiveFilter] = useState('')
  //Search Filters (Fuse JS)
  const [searchQuery, setSearchQuery] = useState('')
  const fuse = new Fuse(products.data, {
    keys: ['title', 'category'],
    includeScore: 'true',
  })
  const searchResults = fuse.search(searchQuery)
  const queriedProducts = searchQuery
    ? searchResults.map(product => product.item)
    : products.data

  const handleSearch = e => {
    setSearchQuery(e.target.value)
  }

  useEffect(() => {
    if (products.status === 'idle') {
      dispatch(fetchProductsAsync())
    }
  }, [products.status, dispatch])

  console.log(products.carts)

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
        border: '1px solid red',
        boxSizing: 'border-box',
      }}
    >
      <Discounts />

      <Box
        display="flex"
        sx={{ marginY: '2rem', flexDirection: 'column', gap: 2 }}
      >
        <Typography variant="h5" color="initial" sx={{}}>
          Products
        </Typography>
        <FilterGroup
          searchQuery={searchQuery}
          searchOnChage={handleSearch}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      </Box>

      <Items activeFilter={activeFilter} productData={queriedProducts} />
      {console.log(products.data)}
    </Box>
  )
}
