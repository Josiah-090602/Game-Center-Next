import React from 'react'
import Link from '@mui/material/Link'

export default function NotFoun() {
  return (
    <div>
      Page Not Found
      <Link
        href="/"
        variant="body1"
        underline="hover"
        target="_blank"
        rel="noopener noreferrer"
      >
        Return Home
      </Link>
    </div>
  )
}
