import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './PerroCard.module.css'
import perroCardStyles from './perroCardStyles'

const PerroCard = ({ perro }) => {
  const [mostrarSegunda, setMostrarSegunda] = useState(false)
  const navigate = useNavigate()

  // Buscar config por id (si no existe, será un objeto vacío)
  const config = perroCardStyles[perro.id] || {}

  const handleLlamar = () => {
    // Cambiar a imagen 2
    setMostrarSegunda(true)

    // Esperar 3 segundos y luego navegar
    setTimeout(() => {
      navigate(`/perros/${perro.id}`)
    }, 3000)
  }

  return (
    <div className={styles.card}>
      {/* Imagen 1 */}
      <img
        className={`${styles.imageUno} ${!mostrarSegunda ? styles.visible : styles.oculta}`}
        src={perro.imagen_card_uno}
        alt={`${perro.nombre} imagen uno`}
        style={config.imagenUno}   
      />

      {/* Imagen 2 */}
      <img
        className={`${styles.imageDos} ${mostrarSegunda ? styles.visible : styles.oculta}`}
        src={perro.imagen_card_dos}
        alt={`${perro.nombre} imagen dos`}
        style={config.imagenDos}   
      />

      <button className={styles.link} onClick={handleLlamar}>
        Llamar
      </button>
    </div>
  )
}

export default PerroCard
