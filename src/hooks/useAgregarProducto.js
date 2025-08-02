// src/hooks/useAgregarProducto.js
import { useState } from 'react'
import { postProducto } from '@utils/fetchProductos'

const useAgregarProducto = (token) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const agregarProducto = async (form) => {
    setIsLoading(true)
    setError(null)

    try {
      await postProducto(form, token)
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  return { agregarProducto, isLoading, error }
}

export default useAgregarProducto
