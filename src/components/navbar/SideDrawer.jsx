import React from 'react'
import { Box, IconButton, Drawer, Typography, Link } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Links from './links/Links'
import Cart from './Cart'
import Profile from './Profile'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'

export default function SideDrawer() {
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = newOpen => () => {
    setOpen(newOpen)
  }
  return (
    <>
      <IconButton color="primary" onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        bgcolor="primary"
        open={open}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{
            height: '100%',
            width: '300px',
            bgcolor: 'secondary.dark',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingY: '5rem',
            position: 'relative',
          }}
        >
          <IconButton
            sx={{ position: 'absolute', left: '3%', top: '3%', color: 'white' }}
            onClick={toggleDrawer(false)}
          >
            <KeyboardDoubleArrowRightIcon color="primary" />
          </IconButton>
          <Box
            display="flex"
            gap={2}
            flexDirection="column"
            alignItems="center"
          >
            <Links />
            <Cart />
          </Box>
          <Box textAlign="center">
            <Profile />
            <Typography variant="body1" color="white">
              Josiah B. Viernes
            </Typography>
            <Typography variant="caption" sx={{ fontColor: 'white' }}>
              <Link>vJosiah@gmail.com</Link>
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  )
}
