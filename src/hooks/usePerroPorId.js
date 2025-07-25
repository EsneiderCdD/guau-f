// src/hooks/usePerroPorId.js
import { useEffect, useState } from 'react'
import { getPerroPorId } from '../utils/fetchPerros'

const usePerroPorId = (id) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!id) return
    getPerroPorId(id)
      .then(perro => setData(perro))
      .catch(err => setError(err.message))
      .finally(() => setIsLoading(false))
  }, [id])

  return { data, isLoading, error }
}

export default usePerroPorId
