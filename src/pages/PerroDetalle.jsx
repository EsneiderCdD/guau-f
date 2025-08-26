import { useParams } from 'react-router-dom'
import usePerroPorId from '../hooks/usePerroPorId'
import styles from './PerroDetalle.module.css'
import AdopcionForm from '../components/AdopcionForm/AdopcionForm'
import useAuthStore from '../store/authStore'
import { useState } from 'react'
import Navbar from '@/components/Navbar/Navbar'
import { motion } from 'framer-motion'
import Stats from '../components/stats/Stats'

const demoFotos = [
  { src: 'https://placedog.net/400/300?id=1', style: { top: 0, left: 40, rotate: -5 } },
  { src: 'https://placedog.net/400/300?id=2', style: { top: 30, left: 220, rotate: 3 } },
  { src: 'https://placedog.net/400/300?id=3', style: { top: 150, left: 100, rotate: -2 } },
  { src: 'https://placedog.net/400/300?id=4', style: { top: 60, left: 400, rotate: 4 } },
  { src: 'https://placedog.net/400/300?id=5', style: { top: 180, left: 300, rotate: -4 } },
  { src: 'https://placedog.net/400/300?id=6', style: { top: 100, left: 500, rotate: 2 } },
]

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
    <div>
      <Navbar />
      <section className={styles.container}>
        <div className={styles.textos}>
          <h2>{perro.nombre}</h2>
          <p>
            {perro.nombre} es un perro de raza muy amigable, sonriente y juguetón.
            Le encanta jugar con la pelota y recibir caricias.
          </p>



          {/* collage */}
          <div className={styles.collage}>
            {demoFotos.map((foto, i) => (
              <motion.div
                key={i}
                className={styles.photo}
                style={foto.style}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <img src={foto.src} alt={`perro-${i}`} />
              </motion.div>

            ))}
          </div>
          <Stats />

          <div style={{ display: 'flex', justifyContent: 'center' }}>
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
        </div>
      </section>
    </div>
  )
}

export default PerroDetalle
