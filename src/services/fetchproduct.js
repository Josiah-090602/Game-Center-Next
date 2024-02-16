import React from 'react'

export default async function fetchproduct() {
  const URL = 'https://fakestoreapi.com/products'

  try {
    const res = await fetch(URL)
    const data = await res.json()
    return data
  } catch (error) {
    throw new Error(`Error: ${error.message}`)
  }
}
