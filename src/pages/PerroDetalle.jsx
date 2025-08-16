// PerroDetalle.jsx
import { useParams } from 'react-router-dom'
import usePerroPorId from '../hooks/usePerroPorId'
import styles from './PerroDetalle.module.css'
import AdopcionForm from '../components/AdopcionForm/AdopcionForm'
import useAuthStore from '../store/authStore'
import { useState } from 'react'

const PerroDetalle = () => {
  const { id } = useParams()
  const { data: perro, isLoading, error } = usePerroPorId(id)
  const isAuth = useAuthStore(state => state.isAuthenticated())
  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [solicitudEnviada, setSolicitudEnviada] = useState(false)

  if (isLoading) return <p className={styles.loading}>Cargando...</p>
  if (error) return <p className={styles.loading}>Error: {error}</p>
  if (!perro) return null

  const handleAdoptarClick = () => {
    if (!isAuth) {
      alert('¡Debes iniciar sesión para adoptar!')
      return
    }
    setMostrarFormulario(true)
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.nombre}>{perro.nombre}</h2>
      <div className={styles.imageWrapper}>
        <img src={perro.imagen_card_dos} alt={perro.nombre} className={styles.image} />
        
      </div>

      <div className={styles.texto}>
        <p className={styles.detail}><strong>Edad:</strong> {perro.edad}</p>
        <p className={styles.detail}><strong>Raza:</strong> {perro.raza}</p>
        <p className={styles.description}>{perro.descripcion}</p>

        {!solicitudEnviada && (
          <button className={styles.button} onClick={handleAdoptarClick}>
            Adóptame
          </button>
        )}

        {mostrarFormulario && !solicitudEnviada && (
          <AdopcionForm
            perroId={id}
            onSuccess={() => {
              setSolicitudEnviada(true)
              setMostrarFormulario(false)
              alert('🎉 Solicitud enviada con éxito.')
            }}
          />
        )}

        {solicitudEnviada && (
          <p className={styles.confirmacion}>Gracias por tu interés ❤️</p>
        )}
      </div>
    </section>
  )
}

export default PerroDetalle
