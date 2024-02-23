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
import ActionButtons from './ActionButtons'

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
          padding: 3,
          flexDirection: { md: 'row', xs: 'column' },
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: { md: '50%', xs: '100%' },
            height: { md: '500px', xs: '300px' },
            objectFit: 'cover',
            backgroundSize: { md: '60%', sm: '20%', xs: '40%' },
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${item.image})`,
            backgroundPosition: 'center',
            border: '1px solid red',
          }}
        ></Box>

        <Box
          p={{ md: 4, sm: 2 }}
          display="flex"
          sx={{
            gap: 2,
            flexDirection: 'column',
            width: { md: '70%', xs: '100%' },
            justifyContent: 'space-between',
          }}
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

          <Typography variant="body1" color="initial">
            {item.description}
          </Typography>

          <Typography variant="h3" color="primary" fontSize="2.4rem">
            {' '}
            <strong> $ {item.price}</strong>
          </Typography>
          <Stack
            alignItems="center"
            spacing={1}
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
          >
            <Quantity
              item={count}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
            <Typography
              variant="subtitle1"
              color="initial"
              sx={{ opacity: 0.4 }}
            >
              $ {item.price * count}
            </Typography>
          </Stack>

          <ActionButtons onclick={handleAddPreOrder} />
        </Box>
      </Box>
    </>
  )
}
