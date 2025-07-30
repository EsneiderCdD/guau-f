// src/hooks/usePerrosAdmin.js
import { useEffect, useState } from 'react'
import { getPerros } from '@utils/fetchPerros'

const usePerrosAdmin = () => {
  const [perros, setPerros] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const cargarPerros = async () => {
    try {
      const data = await getPerros()
      setPerros(data)
    } catch (err) {
      setError('No se pudieron cargar los perros')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    cargarPerros()
  }, [])

  return {
    perros,
    setPerros,
    cargarPerros,
    isLoading,
    error
  }
}

export default usePerrosAdmin
