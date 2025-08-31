import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './PerroCard.module.css'
import perroCardStyles from './perroCardStyles'

const PerroCard = ({ perro }) => {
  const [mostrarSegunda, setMostrarSegunda] = useState(false)
  const alternarImagen = () => setMostrarSegunda(prev => !prev)

  // Buscar config por id (si no existe, será un objeto vacío)
  const config = perroCardStyles[perro.id] || {}

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setMostrarSegunda(true)}
      onMouseLeave={() => setMostrarSegunda(false)}
      onClick={alternarImagen}
    >
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

      <Link className={styles.link} to={`/perros/${perro.id}`}>Ver más</Link>
    </div>
  )
}

export default PerroCard
