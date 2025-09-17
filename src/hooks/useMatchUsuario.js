// src/hooks/useMatchUsuario.js
import { useState, useEffect } from "react"
import useAuthStore from "@store/authStore"

const API_URL = "http://127.0.0.1:5000/match"

const useMatchUsuario = () => {
  const token = useAuthStore((state) => state.token)
  const user = useAuthStore((state) => state.user)

  const [perfil, setPerfil] = useState(null)
  const [compatibilidad, setCompatibilidad] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchPerfil = async () => {
    if (!token) return
    setLoading(true)
    try {
      const res = await fetch(`${API_URL}/me`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      if (!res.ok) throw new Error("No se pudo obtener perfil")
      const data = await res.json()
      setPerfil(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const savePerfil = async (vector, datos_fisicos = null) => {
    if (!token) return
    setLoading(true)
    try {
      const res = await fetch(`${API_URL}/responder`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ vector, datos_fisicos })
      })
      if (!res.ok) throw new Error("No se pudo guardar perfil")
      const data = await res.json()
      setPerfil(data.perfil)
      return data.perfil
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  const fetchCompatibilidad = async () => {
    if (!user) return
    setLoading(true)
    try {
      const res = await fetch(`${API_URL}/${user.id}`)
      if (!res.ok) throw new Error("No se pudo obtener compatibilidad")
      const data = await res.json()
      setCompatibilidad(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return {
    perfil,
    compatibilidad,
    loading,
    error,
    fetchPerfil,
    savePerfil,
    fetchCompatibilidad
  }
}

export default useMatchUsuario
