// src/hooks/useProductosAdmin.js
import { useEffect, useState } from 'react'
import { getProductos } from '@utils/fetchProductos'

const useProductosAdmin = () => {
  const [productos, setProductos] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const cargarProductos = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const data = await getProductos()
      setProductos(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    cargarProductos()
  }, [])

  return {
    productos,
    setProductos,
    cargarProductos,
    isLoading,
    error
  }
}

export default useProductosAdmin
