'use client'
import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#0E9292',
      dark: '#10606C',
      light: '#07DEC4',
    },
    secondary: {
      main: '#27384C',
      dark: '#1D2937',
      light: '#3F5166',
      contrastText: '#FBFCFC',
    },
    warning: {
      dark: 'rgb(241, 176, 35)',
      light: 'rgb(253, 190, 52, 0.5)',
      main: '#FFC436',
    },
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    h1: { fontSize: '5rem' },
    h2: { fontSize: '4rem' },
    h3: { fontSize: '3rem' },
    h4: { fontSize: '2rem' },
    h5: { fontSize: '1.5rem' },
    h6: { fontSize: '1.3rem' },
  },
})

export default theme
