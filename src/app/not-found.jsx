import React from 'react'
import { Link, Box } from '@mui/material'

export default function NotFoun() {
  return (
    <>
      <Box
        display="flex"
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '20px',
          height: 'calc(100vh - 9rem)',
        }}
      >
        <img
          src="/pagenotfound.svg"
          alt=""
          width="300px"
          style={{ opacity: 0.4 }}
        />
        <Link
          href="/"
          variant="body1"
          underline="hover"
          target="_self"
          rel="noopener noreferrer"
        >
          Return Home
        </Link>
      </Box>
    </>
  )
}
