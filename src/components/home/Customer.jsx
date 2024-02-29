import React from 'react'
import {
  Card,
  Stack,
  CardHeader,
  Avatar,
  IconButton,
  Typography,
  Divider,
  Rating,
} from '@mui/material'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'

const feedbacks = [
  {
    customerName: 'John Doe',
    feedback:
      "I'm extremely satisfied with my purchase. The product quality is top-notch, far exceeding my expectations. The materials used are durable and the design is very appealing. I will definitely recommend your store to my friends.",
    rating: 5,
    profile: '/profile1.jpg',
  },
  {
    customerName: 'Jane Smith',
    feedback:
      'Your customer service is excellent. I had an issue with my order and your team resolved it quickly and professionally. I appreciate the prompt response and the willingness to go the extra mile for customers. Keep up the good work!',
    rating: 4,
    profile: '/profile3.jpg',
  },
  {
    customerName: 'Bob Johnson',
    feedback:
      "The delivery was fast and secure. My order arrived in perfect condition, well-packaged and within the estimated delivery time. It's clear that you take great care in ensuring a positive customer experience. I'm looking forward to my next purchase.",
    rating: 4.5,
    profile: '/profile2.jpg',
  },
]

export default function Customer() {
  return (
    <Stack
      direction={{ md: 'row', xs: 'column' }}
      boxSizing="border-box"
      spacing={2}
      width={{ md: '80%', xs: '100%' }}
    >
      {feedbacks.map((feedback, index) => (
        <Card
          key={index}
          variant="outlined"
          sx={{ borderRadius: 4, border: 'none' }}
        >
          <CardHeader
            sx={{ bgcolor: 'secondary.dark', color: 'white' }}
            avatar={<Avatar aria-label="" src={feedback.profile} />}
            action={<IconButton aria-label=""></IconButton>}
            title={
              <Typography sx={{ fontWeight: 600 }}>
                {feedback.customerName}
              </Typography>
            }
            subheader={
              <Rating
                sx={{ color: 'primary.main' }}
                readOnly
                value={feedback.rating}
                size="small"
              />
            }
          />
          <Divider variant="fullWidth" orientation="horizontal" />
          <CardContent>
            <Typography variant="subtitle2" color="initial">
              {feedback.feedback}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Stack>
  )
}
