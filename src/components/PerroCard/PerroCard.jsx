import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './PerroCard.module.css'

const PerroCard = ({ perro }) => {
  const [mostrarSegunda, setMostrarSegunda] = useState(false)

  const alternarImagen = () => setMostrarSegunda(prev => !prev)

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
      />

      {/* Imagen 2 con estilo distinto */}
      <img
        className={`${styles.imageDos} ${mostrarSegunda ? styles.visible : styles.oculta}`}
        src={perro.imagen_card_dos}
        alt={`${perro.nombre} imagen dos`}
      />

      <h3 className={styles.title}>{perro.nombre}</h3>
      <Link className={styles.link} to={`/perros/${perro.id}`}>Ver más</Link>
    </div>
  )
}

export default PerroCard
