import { useEffect, useState } from 'react'
import useAuthStore from '@store/authStore'
import {
  fetchSolicitudes,
  deleteSolicitud
} from '@utils/fetchSolicitudes'

const useSolicitudesAdmin = () => {
  const [solicitudes, setSolicitudes] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const token = useAuthStore((state) => state.token)

  const cargarSolicitudes = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const data = await fetchSolicitudes(token)
      setSolicitudes(data)
    } catch (err) {
      setError(err.message || 'Error al cargar solicitudes')
    } finally {
      setIsLoading(false)
    }
  }

  const eliminarSolicitud = async (id) => {
    try {
      await deleteSolicitud(id, token)
      setSolicitudes((prev) => prev.filter((s) => s.id !== id))
    } catch (err) {
      throw new Error(err.message || 'Error al eliminar solicitud')
    }
  }

  useEffect(() => {
    cargarSolicitudes()
  }, [])

  return {
    solicitudes,
    isLoading,
    error,
    eliminarSolicitud,
    recargar: cargarSolicitudes
  }
}

export default useSolicitudesAdmin
