import React from 'react'
import {
  Container,
  Box,
  Typography,
  Divider,
  Rating,
  Stack,
  Button,
} from '@mui/material'
import Quantity from '@/components/cart/Quantity'
import { useDispatch, useSelector } from 'react-redux'
import {
  increasePreOrder,
  decreasePreOrder,
  addPreOrdertoCarts,
} from '@/redux/productSlice'

export default function PreviewItem({ item }) {
  const count = useSelector(state => state.products.preOrderedCount)
  const dispatch = useDispatch()

  const handleIncrease = () => {
    dispatch(increasePreOrder())
  }

  const handleDecrease = () => {
    dispatch(decreasePreOrder())
  }

  const handleAddPreOrder = () => {
    dispatch(addPreOrdertoCarts(item))
  }

  return (
    <>
      <Box
        sx={{
          border: '1px solid red',
          boxSizing: 'border-box',
          width: '100%',
          display: 'flex',
          padding: '0 !important',
          flexDirection: { md: 'row', sm: 'column' },
        }}
      >
        <img
          src={item.image}
          alt={item.name}
          style={{
            width: '30%',
            height: '500px',
            objectFit: 'contain',
            border: '1px solid black',
          }}
        />

        <Box
          p={{ md: 4, sm: 2 }}
          display="flex"
          sx={{ gap: 2, flexDirection: 'column', width: '70%' }}
        >
          <Typography variant="h5" color="initial">
            <strong> {item.title}</strong>
          </Typography>
          <Divider variant="fullWidth" orientation="horizontal" />

          <Stack
            spacing={1}
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
          >
            <Rating readOnly value={item.rating.rate} />

            <Typography variant="body1" color="initial" sx={{ opacity: 0.5 }}>
              {item.rating.count} rate count
            </Typography>
          </Stack>

          <Typography variant="h3" color="primary" mt={3} fontSize="2.4rem">
            {' '}
            <strong> $ {item.price}</strong>
          </Typography>

          <Quantity
            item={count}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />
          <Button variant="text" color="primary" onClick={handleAddPreOrder}>
            Add to Cart
          </Button>
        </Box>
      </Box>
    </>
  )
}
