'use client'
import fetchproduct from '@/services/fetchproduct'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
  data: [],
  status: 'idle',
  error: null,
  carts: [],
  preOrdered: {},
  preOrderedCount: 0,
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
        const addedProduct = { ...action.payload, quantity: 1, checked: false }
        state.carts.push(addedProduct)
        toast.success('New product added to cart')
      }
    },
    removeProduct: (state, action) => {
      const updatedCart = state.carts.filter(
        carts => carts.id !== action.payload.id,
      )

      state.carts = updatedCart
      toast.error('Product removed from cart')
    },
    increaseQuantity: (state, action) => {
      const itemIndex = state.carts.findIndex(
        item => item.id === action.payload.id,
      )
      state.carts[itemIndex].quantity += 1
    },
    decreaseQuantity: (state, action) => {
      const itemIndex = state.carts.findIndex(
        item => item.id === action.payload.id,
      )
      if (state.carts[itemIndex].quantity > 1) {
        state.carts[itemIndex].quantity -= 1
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
      const checkedProducts = state.carts.filter(item => item.checked)

      let { total } = checkedProducts.reduce(
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
    addPreOrder: (state, action) => {
      state.preOrdered = action.payload
      state.preOrderedCount = 1
    },
    increasePreOrder: (state, action) => {
      state.preOrderedCount += 1
    },
    decreasePreOrder: (state, action) => {
      if (state.preOrderedCount > 0) {
        state.preOrderedCount -= 1
      }
    },
    addPreOrdertoCarts: (state, action) => {
      const itemIndex = state.carts.findIndex(
        item => item.id === action.payload.id,
      )
      if (itemIndex >= 0 && state.preOrderedCount > 0) {
        state.carts[itemIndex].quantity += state.preOrderedCount
        toast.info('Added a product quantity')
      } else if (state.preOrderedCount > 0) {
        const preOrdered = {
          ...state.preOrdered,
          quantity: state.preOrderedCount,
          checked: false,
        }
        state.carts.push(preOrdered)

        toast.success('Pre-ordered item added to cart')

        state.preOrderedCount = 1
        state.preOrdered = {}
      } else if (state.preOrderedCount === 0) {
        toast.error('No pre-ordered item to add to cart')
      }
    },
    checkProduct: (state, action) => {
      const itemIndex = state.carts.findIndex(
        item => item.id === action.payload.id,
      )
      state.carts[itemIndex].checked = !state.carts[itemIndex].checked
    },
    checkAllProducts: (state, action) => {
      const filter = state.carts.filter(item => item.checked === false)

      if (filter.length > 0) {
        state.carts.map(item => (item.checked = true))
      } else {
        state.carts.map(item => (item.checked = false))
      }
    },
    buyNow: (state, action) => {
      const itemIndex = state.carts.findIndex(
        item => item.id === action.payload.id,
      )
      if (itemIndex >= 0 && state.preOrderedCount > 0) {
        state.carts[itemIndex].quantity += state.preOrderedCount
        toast.info('Added a product quantity')
      } else if (state.preOrderedCount > 0) {
        console.log(state.carts)
        const preOrdered = {
          ...state.preOrdered,
          quantity: state.preOrderedCount,
          checked: true,
        }
        state.carts.push(preOrdered)

        toast.success('Pre-ordered item added to cart')

        state.preOrderedCount = 1
        state.preOrdered = {}
      } else if (state.preOrderedCount === 0) {
        toast.error('No pre-ordered item to add to cart')
      }
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
  increaseQuantity,
  clearCartItems,
  getTotalPrice,
  addPreOrder,
  increasePreOrder,
  decreasePreOrder,
  addPreOrdertoCarts,
  checkProduct,
  checkAllProducts,
  buyNow,
} = productSlice.actions
export default productSlice.reducer
