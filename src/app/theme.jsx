'use client'

import { createTheme } from '@mui/material'

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
 
      `,
    },
  },
  breakpoints: {
    values: {
      xs: 300,
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
