// src/hooks/useComprarProducto.js
import { useState } from 'react'
import { comprarProducto } from '@utils/fetchProductos'

const useComprarProducto = (token) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const comprar = async ({ producto_id, cantidad = 1 }) => {
    if (!token) throw new Error('Debes estar autenticado para comprar')

    setIsLoading(true)
    setError(null)
    try {
      await comprarProducto(producto_id, cantidad, token)
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  return { comprar, isLoading, error }
}

export default useComprarProducto
