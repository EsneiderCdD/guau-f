// src/components/User/RegisterForm.jsx

import { useState } from 'react'
import styles from './RegisterForm.module.css'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '@store/authStore'

const RegisterForm = () => {
  const [nombre, setNombre] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const login = useAuthStore((state) => state.login)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const res = await fetch('http://127.0.0.1:5000/auth/registro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, password })
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Error al registrar')
      }

      // Llamar login manualmente porque el backend no devuelve token aún
      // Si más adelante quieres, puedes generar un token automáticamente aquí
      navigate('/login') // Lo ideal: redirigir al login

    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Registrarse</h2>

      <input
        type="text"
        placeholder="Nombre de usuario"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className={styles.input}
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles.input}
      />

      <button type="submit" className={styles.button} disabled={isLoading}>
        {isLoading ? 'Cargando...' : 'Registrando'}
      </button>

      {error && <p className={styles.error}>{error}</p>}
    </form>
  )
}

export default RegisterForm
