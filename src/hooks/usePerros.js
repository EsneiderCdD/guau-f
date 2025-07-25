import { useEffect, useState } from 'react'
import { getPerros } from '../utils/fetchPerros'

const usePerros = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getPerros()
      .then(perros => setData(perros))
      .catch(err => setError(err.message))
      .finally(() => setIsLoading(false))
  }, [])

  return { data, isLoading, error }
}

export default usePerros
