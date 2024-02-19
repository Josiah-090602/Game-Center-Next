'use client'
import { createGlobalStyle } from 'styled-components'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin', 'devanagari'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
`

export default GlobalStyle
