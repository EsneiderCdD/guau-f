import { useState } from 'react'
import styles from './LoginForm.module.css'
import { loginRequest } from '@utils/fetchAuth'
import useAuthStore from '@store/authStore'         // ✅ ← NUEVO
import { useNavigate } from 'react-router-dom'       // ✅ ← NUEVO

const LoginForm = () => {
  const [nombre, setNombre] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const login = useAuthStore((state) => state.login)   // ✅ ← NUEVO
  const navigate = useNavigate()                       // ✅ ← NUEVO

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await loginRequest({ nombre, password })
      login(response.user, response.access_token)      // ✅ ← Guardamos en Zustand
      navigate('/admin')                               // ✅ ← Redirigimos
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Iniciar sesión</h2>

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
        {isLoading ? 'Cargando...' : 'Entrar'}
      </button>

      {error && <p className={styles.error}>{error}</p>}
    </form>
  )
}

export default LoginForm
