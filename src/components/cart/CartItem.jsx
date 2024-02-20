import React from 'react'
import { Button, Card, Box, Rating, Grid } from '@mui/material'
import { LineClamp } from '@/components/store/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { removeProduct } from '@/redux/productSlice'

import Typography from '@mui/material/Typography'
import Quantity from './Quantity'
export default function CartItem({ item }) {
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()

  const handleRemoveProduct = () => {
    dispatch(removeProduct(item))
  }

  let itemPricePerQuantity = item.price * item.quantity
  return (
    <>
      <Card
        sx={{
          p: 4,
          minHeight: '100px',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          borderRadius: '0',
          boxShadow: '.5px',
          justifyContent: 'space-between',
        }}
      >
        <img
          src={item.image}
          alt=""
          style={{
            height: '100px',
            width: '100px',
            objectFit: 'contain',
          }}
        />
        <Box sx={{ width: '30rem' }}>
          <LineClamp
            style={{ WebkitLineClamp: 1, fontSize: '14px' }}
            variant="subtitle1"
            color="initial"
          >
            {item.title}.
          </LineClamp>
          <Rating
            sx={{ color: 'primary.main' }}
            value={item.rating.rate}
            readOnly
          />
        </Box>
        <LineClamp width="7rem" textAlign="center">
          <strong>$ {item.price}</strong>
        </LineClamp>

        <Quantity item={item} />

        <LineClamp width="7rem" textAlign="center">
          <strong>$ {itemPricePerQuantity}</strong>
        </LineClamp>

        <Button onClick={handleRemoveProduct}>Remove Item</Button>
      </Card>
    </>
  )
}
