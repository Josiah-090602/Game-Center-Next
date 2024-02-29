import React from 'react'
import { Stack, Paper, Typography, Divider } from '@mui/material'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import GroupsIcon from '@mui/icons-material/Groups'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'

const data = [
  {
    title: 'High Quality Products',
    description:
      'We take pride in offering products of the highest quality. Our items are carefully curated and thoroughly inspected to ensure you get the best.',
    icon: <ShoppingBagIcon size="small" />,
  },
  {
    title: 'Excellent Customer Service',
    description:
      'Our customer service team is always ready to assist you. Your satisfaction is our priority.',
    icon: <GroupsIcon size="small" />,
  },
  {
    title: 'Fast and Secure Delivery',
    description:
      'We ensure that your orders are delivered in a timely manner and take utmost care in making sure that they reach you safely.',
    icon: <LocalShippingIcon size="small" />,
  },
]

export default function Reasons() {
  return (
    <Stack
      spacing={{ lg: 2, xs: 1 }}
      direction={{ lg: 'row', xs: 'column' }}
      divider={<Divider orientation="vertical" flexItem />}
      width={{ md: '80%', xs: '100%' }}
    >
      {data.map((item, index) => (
        <Paper
          key={index}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
            padding: 3,
            width: '100%',
            textAlign: 'center',
            alignItems: 'center',
          }}
        >
          {' '}
          {item.icon}
          <Typography
            variant="h6"
            gap={1}
            sx={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: 'secondary.dark',
            }}
            color="initial"
          >
            {' '}
            {item.title}
          </Typography>
          <Typography
            variant="body1"
            color="secondary.dark"
            sx={{ fontSize: '0.9rem' }}
            marginTop={{ xs: 1, md: 2 }}
            height={{ md: '60px', xs: 'auto' }}
          >
            {item.description}
          </Typography>
        </Paper>
      ))}
    </Stack>
  )
}
