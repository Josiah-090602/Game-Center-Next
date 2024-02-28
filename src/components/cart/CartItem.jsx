import React from 'react'
import { Button, Card, Box, Rating, Checkbox, IconButton } from '@mui/material'
import { LineClamp } from '@/components/store/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import {
  removeProduct,
  decreaseQuantity,
  addProduct,
  checkProduct,
} from '@/redux/productSlice'
import ClearIcon from '@mui/icons-material/Clear'

import Quantity from './Quantity'
export default function CartItem({ item }) {
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()

  const handleRemoveProduct = () => {
    dispatch(removeProduct(item))
  }

  const handleDecrease = () => {
    dispatch(decreaseQuantity(item))
  }

  const handleIncrease = () => {
    dispatch(addProduct(item))
  }

  const handleCheckProduct = () => {
    dispatch(checkProduct(item))
  }

  let itemPricePerQuantity = item.price * item.quantity
  return (
    <>
      <Card
        sx={{
          p: 4,
          minHeight: { md: '100px', xs: '300px' },
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          borderRadius: '0',
          boxShadow: '.5px',
          alignItems: 'center',
          justifyContent: { md: 'space-between' },
          flexDirection: { xs: 'column', md: 'row' },
          position: 'relative',
        }}
      >
        <Checkbox
          label={item.title}
          checked={item.checked}
          onChange={handleCheckProduct}
          sx={{
            position: { xs: 'absolute', md: 'relative' },
            top: { xs: '10px', md: '0' },
            left: { xs: '10px', md: '0' },
          }}
        />
        <img
          src={item.image}
          alt=""
          style={{
            height: '100px',
            width: '100px',
            objectFit: 'contain',
          }}
        />
        <Box
          sx={{
            width: { md: '30rem', xs: '100%' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
          }}
        >
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

        <Quantity
          onDecrease={handleDecrease}
          onIncrease={handleIncrease}
          item={item}
        />

        <LineClamp width="7rem" textAlign="center">
          <strong>$ {itemPricePerQuantity}</strong>
        </LineClamp>

        <IconButton
          sx={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            display: { xs: 'block', md: 'none' },
          }}
          aria-label=""
          onClick={handleRemoveProduct}
        >
          <ClearIcon color="error" />
        </IconButton>

        <Button
          sx={{ display: { xs: 'none', md: 'block' } }}
          onClick={handleRemoveProduct}
        >
          Remove
        </Button>
      </Card>
    </>
  )
}
