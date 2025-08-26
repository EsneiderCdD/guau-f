import { useParams } from 'react-router-dom'
import usePerroPorId from '../hooks/usePerroPorId'
import styles from './PerroDetalle.module.css'
import AdopcionForm from '../components/AdopcionForm/AdopcionForm'
import useAuthStore from '../store/authStore'
import { useState } from 'react'
import Navbar from '@/components/Navbar/Navbar'
import { motion } from 'framer-motion'
import Stats from '../components/stats/Stats'
import { getCollageLayout } from '../utils/collageLayouts'  // 👈 importamos layouts

const PerroDetalle = () => {
  const { id } = useParams()
  const { data: perro, isLoading, error } = usePerroPorId(id)
  const isAuth = useAuthStore(state => state.isAuthenticated())
  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [solicitudEnviada, setSolicitudEnviada] = useState(false)

  if (isLoading) return <p className={styles.loading}>Cargando...</p>
  if (error) return <p className={styles.loading}>Error: {error}</p>
  if (!perro) return null

  const layout = getCollageLayout()

  const fotos = Array.from({ length: 6 }).map((_, i) => ({
    src: `https://placedog.net/400/300?id=${id}-${i}`, // así cambian por perro
    style: layout[i],
  }))

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
            {fotos.map((foto, i) => (
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
