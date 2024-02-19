import React from 'react'
import {
  Card,
  CardContent,
  Box,
  Button,
  Divider,
  Typography,
  Rating,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import Actions from './Actions'

export const LineClamp = styled(Typography)(() => ({
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitBoxOrient: 'vertical',
  textOverflow: 'ellipsis',
}))

export default function ProductCard({ product }) {
  return (
    <>
      <Card
        variant="outlined"
        sx={{
          height: 'fit-content',
          width: '100%',
          p: 2,
          boxSizing: 'border-box',
        }}
      >
        <CardContent>
          <img
            src={product.image}
            alt=""
            style={{
              height: '200px',
              width: '100%',
              objectFit: 'contain',
            }}
          />
        </CardContent>

        <Box>
          <LineClamp
            style={{ WebkitLineClamp: 1 }}
            fontSize={{ lg: '1rem', md: '0.8rem', sm: '15px', xs: '10px' }}
            variant="subtitle1"
            color="initial"
          >
            {product.title}
          </LineClamp>
          <LineClamp>
            <strong>$ {product.price}</strong>{' '}
          </LineClamp>
          <Rating
            sx={{ color: 'primary.main' }}
            value={product.rating.rate}
            readOnly
          />
        </Box>
        <Box sx={{ width: '100%' }}>
          <Actions />
        </Box>
      </Card>
    </>
  )
}
