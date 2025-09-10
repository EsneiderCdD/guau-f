import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './PerroCard.module.css'
import perroCardStyles from './perroCardStyles'

const PerroCard = ({ perro }) => {
  const [mostrarSegunda, setMostrarSegunda] = useState(false)
  const navigate = useNavigate()

  const config = perroCardStyles[perro.id] || {}

  const handleLlamar = () => {
    setMostrarSegunda(true)
    setTimeout(() => {
      navigate(`/perros/${perro.id}`)
    }, 3000)
  }

  return (
    <div className={styles.card}>
      {/* Contenedor imágenes */}
      <div className={styles.imageContainer}>
        <img
          className={`${styles.imageUno} ${!mostrarSegunda ? styles.visible : styles.oculta}`}
          src={perro.imagen_card_uno}
          alt={`${perro.nombre} imagen uno`}
          style={config.imagenUno}
        />

        <img
          className={`${styles.imageDos} ${mostrarSegunda ? styles.visible : styles.oculta}`}
          src={perro.imagen_card_dos}
          alt={`${perro.nombre} imagen dos`}
          style={config.imagenDos}
        />
      </div>

      {/* Botón al final */}
      <button className={styles.button} onClick={handleLlamar}>
        <span>Llamar</span>
      </button>
    </div>
  )
}

export default PerroCard
