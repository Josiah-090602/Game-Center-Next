import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPreOrder } from '@/redux/productSlice'
import { Button } from '@mui/material'
import newArrivals from '../store/newArrivals'

export default function PreviewButton({ product }) {
  const dispatch = useDispatch()

  const item = newArrivals.find(item => item.id === product.id)

  const handleAddPreOrder = () => {
    dispatch(addPreOrder(item))
  }
  return (
    <>
      <Button
        href={`/store/${product.id}`}
        onClick={handleAddPreOrder}
        sx={{
          padding: '4px 5rem',
          position: 'absolute',
          height: 'fit-content',
          width: { md: 'fit-content', xs: '100%' },
          zIndex: '1',
          fontSize: {
            xs: '0.5rem',
            sm: '.8rem',
            md: '.9rem',
            lg: '1.3rem',
          },
          bottom: { md: '20px', xs: '0' },
          right: { md: '20px', xs: '0' },
          borderRadius: '0',
          color: 'white',
          borderColor: product.color,
          opacity: '0.5',
          transition: '0.5s',
          backgroundColor: product.color,
          '&:hover': {
            opacity: '1',
            backgroundColor: product.color,
            color: 'white',
            borderColor: product.color,
          },
        }}
        variant="contained"
      >
        Preview Product
      </Button>
    </>
  )
}
