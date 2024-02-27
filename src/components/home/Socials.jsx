import React from 'react'
import { Stack, IconButton, Divider, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import XIcon from '@mui/icons-material/X'

export default function Socials() {
  return (
    <Stack direction="row">
      <IconButton color="primary" aria-label="facebook" size="large">
        <FacebookIcon />
      </IconButton>
      <IconButton color="primary" aria-label="facebook" size="large">
        <InstagramIcon />
      </IconButton>
      <IconButton color="primary" aria-label="facebook" size="large">
        <XIcon />
      </IconButton>
    </Stack>
  )
}
