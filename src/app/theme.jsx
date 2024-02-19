'use client'

import { createTheme } from '@mui/material'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: '#F46863',
      dark: '#CB5652',
      light: '#FA9E9A',
    },
    secondary: {
      main: '#3F5166',
      dark: '#202430',
      light: '#3F5166',
      contrastText: '#FBFCFC',
    },
  },
  typography: {
    h1: { fontSize: '5rem' },
    h2: { fontSize: '4rem' },
    h3: { fontSize: '3rem' },
    h4: { fontSize: '2rem', fontWeight: '700' },
    h5: { fontSize: '1.5rem' },
    h6: { fontSize: '1.3rem' },
  },
})

export default theme
