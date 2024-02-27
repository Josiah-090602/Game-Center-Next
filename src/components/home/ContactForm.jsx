'use client'
import React, { useState } from 'react'

import { Box, Button, TextField, Paper, Stack, Typography } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import EmailIcon from '@mui/icons-material/Email'
import AdjustIcon from '@mui/icons-material/Adjust'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import { People } from '@mui/icons-material'
import Socials from './Socials'

const labels = { label: 'Name', icon: <PersonIcon /> }

export default function ContactForm() {
  const [name, setName] = useState('')
  return (
    <>
      <Paper
        sx={{
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: { md: 3, xs: 2 },
          width: { md: '50%', xs: '70%' },
          margin: 'auto',
          borderRadius: '10px',
        }}
      >
        <Typography variant="h4" color="secondary.dark">
          Send us a message
        </Typography>
        <Stack
          direction={{ md: 'row', xs: 'column' }}
          spacing={{ md: 3, xs: 2 }}
          width="100%"
        >
          <TextField
            label="Name"
            variant="outlined"
            size="medium"
            sx={{
              width: { md: '50%', xs: '100%' },
            }}
            color="secondary"
            required
          />

          <TextField
            sx={{
              width: { md: '50%', xs: '100%' },
            }}
            size="medium"
            label="Phone"
            variant="outlined"
            color="secondary"
            required
          />
        </Stack>

        <Stack
          direction={{ md: 'row', xs: 'column' }}
          spacing={{ md: 3, xs: 2 }}
          width="100%"
        >
          <TextField
            label="Email"
            variant="outlined"
            size="medium"
            sx={{
              width: { md: '50%', xs: '100%' },
            }}
            color="secondary"
            required
          />
          <TextField
            sx={{
              width: { md: '50%', xs: '100%' },
            }}
            size="medium"
            label="Subject"
            variant="outlined"
            color="secondary"
            required
          />
        </Stack>

        <TextField
          size="small"
          label="Message"
          variant="outlined"
          color="secondary"
          required
          multiline
          rows={9}
          fullWidth
        />

        <Box display="flex" justifyContent="space-between">
          <Socials />

          <Button
            disableElevation
            variant="contained"
            color="primary"
            size="large"
          >
            Send Message
          </Button>
        </Box>
      </Paper>
    </>
  )
}
