// ✅ VERSIÓN ACTUALIZADA — sin pasar token desde afuera
import { deletePerro } from '@utils/fetchPerros'
import { useState } from 'react'
import useAuthStore from '@store/authStore' // ← IMPORTANTE

const useEliminarPerro = () => {
  const [error, setError] = useState(null)
  const token = useAuthStore((state) => state.token) // ← token adentro del hook

  const eliminarPerro = async (id) => {
    setError(null)
    try {
      await deletePerro(id, token)
    } catch (err) {
      setError(err.message)
      throw err
    }
  }

  return { eliminarPerro, error }
}

export default useEliminarPerro
