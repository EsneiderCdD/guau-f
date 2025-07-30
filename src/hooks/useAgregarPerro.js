// src/hooks/useAgregarPerro.js
import { useState } from 'react'
import { postPerro } from '@utils/fetchPerros'

const useAgregarPerro = (token) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const agregarPerro = async (form) => {
    setIsLoading(true)
    setError(null)

    try {
      await postPerro(form, token)
    } catch (err) {
      setError(err.message)
      throw err // Permite manejarlo externamente si se quiere
    } finally {
      setIsLoading(false)
    }
  }

  return { agregarPerro, isLoading, error }
}

export default useAgregarPerro
