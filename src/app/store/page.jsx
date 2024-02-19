'use client'
import React, { useEffect, useState } from 'react'
import { Typography, Container, Divider, Box } from '@mui/material'
import fetchproduct from '@/services/fetchproduct'
import Discounts from '../../components/navbar/store/Discounts'
import Items from '../../components/navbar/store/Items'

export default function Store() {
  const [productData, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchproduct()
        setData(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])
  console.log(productData)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: '100%' }}>
      <Discounts />

      <Typography variant="h5" color="initial" sx={{ marginY: '2rem' }}>
        Top Products
      </Typography>
      <Items productData={productData} />
    </Box>
  )
}
