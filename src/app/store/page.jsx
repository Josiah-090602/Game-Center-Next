'use client'
import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import fetchproduct from '@/services/fetchproduct'

export default function pages() {
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
    <div>
      {productData.map(product => (
        <Typography key={product.id} variant="h5" color="initial">
          {product.title}
        </Typography>
      ))}
    </div>
  )
}
