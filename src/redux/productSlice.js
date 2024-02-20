'use client'
import fetchproduct from '@/services/fetchproduct'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
  data: [],
  status: 'idle',
  error: null,
  carts: [],
}

export const fetchProductsAsync = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetchproduct()
    return response
  },
)

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const itemIndex = state.carts.findIndex(
        item => item.id === action.payload.id,
      )
      if (itemIndex >= 0) {
        state.carts[itemIndex].quantity += 1
        toast.info('Added a product quantity'),
          {
            position: 'bottom-right',
          }
      } else {
        const addedProduct = { ...action.payload, quantity: 1 }
        state.carts.push(addedProduct)
        toast.success('New product added to cart'),
          {
            position: 'bottom-right',
          }
      }
      console.log(state.carts)
    },
    removeProduct: (state, action) => {
      const updatedCart = state.carts.filter(
        carts => carts.id !== action.payload.id,
      )

      state.carts = updatedCart
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchProductsAsync.pending, state => {
        state.status = 'idle'
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.status = 'success'
        state.data = action.payload
      })
      .addCase(fetchProductsAsync.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const { addProduct, removeProduct } = productSlice.actions
export default productSlice.reducer
