import { useState } from 'react'

// Definimos la URL base directamente
const API_URL = 'http://localhost:5000' // Puerto de tu Flask

const useActualizarPerro = (token) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const actualizarPerro = async (id, perroData) => {
    setIsLoading(true)
    setError(null)
    try {
      const res = await fetch(`${API_URL}/perros/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(perroData)
      })

      if (!res.ok) {
        throw new Error('Error al actualizar perro')
      }

      return await res.json()
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  return { actualizarPerro, isLoading, error }
}

export default useActualizarPerro
