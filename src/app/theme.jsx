'use client'
import { Poppins } from 'next/font/google'
import { createTheme } from '@mui/material'

const poppins = Poppins({
  subsets: ['latin', 'devanagari'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const theme = createTheme({
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
    fontFamily: poppins.style.fontFamily,
    h1: { fontSize: '5rem' },
    h2: { fontSize: '4rem' },
    h3: { fontSize: '3rem' },
    h4: { fontSize: '2rem', fontWeight: '700' },
    h5: { fontSize: '1.5rem' },
    h6: { fontSize: '1.3rem' },
  },
})

export default theme
