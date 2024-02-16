import React from 'react'
import { Box, Link } from '@mui/material'

export default function NavBar() {
  return (
    <Box>
      <Link
        href="/"
        variant="body1"
        underline="hover"
        target="_self"
        rel="noopener noreferrer"
      >
        Home
      </Link>
      <Link
        href="/news"
        variant="body1"
        underline="hover"
        target="_self"
        rel="noopener noreferrer"
      >
        News
      </Link>
      <Link
        href="/store"
        variant="body1"
        underline="hover"
        target="_self"
        rel="noopener noreferrer"
      >
        Store
      </Link>
    </Box>
  )
}
