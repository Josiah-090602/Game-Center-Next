'use client'
import React from 'react'
import { Avatar, MenuItem, Menu, Divider, Box } from '@mui/material'

export default function Profie() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div>
      <Avatar
        onClick={handleClick}
        variant="circular"
        src="/profile.jpg"
        alt=""
        sx={{ width: '30px', height: '30px' }}
      />
      <Box sx={{ bgcolor: 'secondary.dark' }}>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          sx={{ marginTop: 1 }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <Divider variant="fullWidth" orientation="horizontal" />
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Box>
    </div>
  )
}
