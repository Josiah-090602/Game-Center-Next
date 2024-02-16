'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import { Button } from '@mui/material'

export default function NavLink({ link }) {
  const pathName = usePathname()
  return (
    <>
      <Button
        key={link.name}
        href={link.path}
        target="_self"
        rel="noopener noreferrer"
        disableElevation
        disableRipple
        sx={{
          color: pathName === link.path ? 'primary.main' : 'white',
        }}
      >
        {link.name}
      </Button>
    </>
  )
}
