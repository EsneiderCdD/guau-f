import { useState } from 'react'
import useAuthStore from '../../store/authStore'
import { enviarSolicitudAdopcion } from '../../utils/fetchSolicitudes'
import styles from './AdopcionForm.module.css'

const AdopcionForm = ({ perroId, onSuccess }) => {
  const [mensaje, setMensaje] = useState('')
  const [error, setError] = useState('')
  const { token } = useAuthStore()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      await enviarSolicitudAdopcion({ perro_id: perroId, mensaje }, token)
      onSuccess()
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        placeholder="¿Por qué quieres adoptar este perrito?"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        required
        className={styles.textarea}
      />
      {error && <p className={styles.error}>{error}</p>}
      <button className={styles.button} type="submit">Enviar solicitud</button>
    </form>
  )
}

export default AdopcionForm
