import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import deals from './deals'
import { IconButton, Box, Card, Button } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'

const ArrowButton = ({ direction, onClick }) => {
  const Icon = direction === 'next' ? ChevronRightIcon : ChevronLeftIcon
  const position = direction === 'next' ? 'right' : 'left'

  return (
    <IconButton
      color="primary"
      sx={{
        p: '0',
        height: '2rem',
        width: '2rem',
        display: 'flex',
        position: 'absolute',
        [position]: '0.9rem',
        top: '50%',
        zIndex: direction === 'prev' ? '1' : undefined,
      }}
      onClick={onClick}
    >
      <Icon fontSize="sm" sx={{ p: 0 }} />
    </IconButton>
  )
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 1,
  autoplay: 'true',
  autoplaySpeed: 2500,
  nextArrow: <ArrowButton direction="next" />,
  prevArrow: <ArrowButton direction="prev" />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

export default function Discounts() {
  return (
    <Slider {...settings}>
      {deals.map(product => (
        <Box
          key={product.id}
          sx={{
            width: '100%',
            overflow: 'hidden',
          }}
        >
          <Card
            sx={{
              minHeight: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              border: '1px solid #E5E5E5',
              borderRadius: '0',
              position: 'relative',
            }}
          >
            <img
              style={{ objectFit: 'contain', objectPosition: 'center' }}
              src={product.image}
              alt={product.name}
              width="100%"
            />

            <Box>
              <Button
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
            </Box>
          </Card>
        </Box>
      ))}
    </Slider>
  )
}
