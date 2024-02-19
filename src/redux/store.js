'use client'
import { configureStore } from '@reduxjs/toolkit'
import productsSlice from '@/redux/productSlice'

export const store = configureStore({
  reducer: {
    products: productsSlice,
  },
})
