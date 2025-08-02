// src/hooks/useProductos.js
import { useEffect, useState } from 'react'
import { getProductos } from '../utils/fetchProductos'

const useProductos = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getProductos()
      .then((productos) => setData(productos))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false))
  }, [])

  return { data, isLoading, error }
}

export default useProductos
