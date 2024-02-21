'use client'
import fetchproduct from '@/services/fetchproduct'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
  data: [],
  status: 'idle',
  error: null,
  carts: [],
  cartsTotalPrice: 0,
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
        toast.info('Added a product quantity')
      } else {
        const addedProduct = { ...action.payload, quantity: 1 }
        state.carts.push(addedProduct)
        toast.success('New product added to cart')
      }
      console.log(state.carts)
    },
    removeProduct: (state, action) => {
      const updatedCart = state.carts.filter(
        carts => carts.id !== action.payload.id,
      )

      state.carts = updatedCart
      toast.error('Product removed from cart')
    },
    decreaseQuantity: (state, action) => {
      const itemIndex = state.carts.findIndex(
        item => item.id === action.payload.id,
      )
      if (state.carts[itemIndex].quantity > 1) {
        state.carts[itemIndex].quantity -= 1
        toast.info('Decreased a product quantity')
      } else if (state.carts[itemIndex].quantity === 1) {
        const updatedCart = state.carts.filter(
          carts => carts.id !== action.payload.id,
        )

        state.carts = updatedCart
        toast.error('Product removed from cart')
      }
    },
    clearCartItems: (state, action) => {
      state.carts = []
      toast.error('Cart cleared')
    },
    getTotalPrice: (state, action) => {
      let { total } = state.carts.reduce(
        (totalPrice, carts) => {
          const { price, quantity } = carts
          const itemTotal = price * quantity

          totalPrice.total += itemTotal
          return totalPrice
        },
        {
          total: 0,
        },
      )
      state.cartsTotalPrice = total
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

export const {
  addProduct,
  removeProduct,
  decreaseQuantity,
  clearCartItems,
  getTotalPrice,
} = productSlice.actions
export default productSlice.reducer
