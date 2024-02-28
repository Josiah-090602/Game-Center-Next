'use client'
import React, { useEffect, useState } from 'react'
import { Typography, Box, ButtonGroup, Button } from '@mui/material'
import Items from '../../components/store/Items'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsAsync } from '@/redux/productSlice'
import FilterGroup from '@/components/store/FilterGroup'
import Fuse from 'fuse.js'
import newArrivals from '@/components/store/newArrivals'

export default function Store() {
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()

  const combinedData = [...products.data, ...newArrivals]

  //Button Filters
  const [activeFilter, setActiveFilter] = useState('')
  //Search Filters (Fuse JS)
  const [searchQuery, setSearchQuery] = useState('')
  const fuse = new Fuse(combinedData, {
    keys: ['title', 'category'],
    includeScore: 'true',
  })

  const searchResults = fuse.search(searchQuery)
  const queriedProducts = searchQuery
    ? searchResults.map(product => product.item)
    : combinedData
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
        paddingBottom: 2,
        paddingX: {
          lg: '15rem',
          md: '8rem',
          sm: '1rem',
          xs: '1rem',
        },
        bgcolor: 'grey.100',
      }}
    >
      <FilterGroup
        searchQuery={searchQuery}
        searchOnChage={handleSearch}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      <Items activeFilter={activeFilter} productData={queriedProducts} />
      {console.log(combinedData)}
    </Box>
  )
}
