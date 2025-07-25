// src/pages/PerroDetalle.jsx
import { useParams } from 'react-router-dom'
import usePerroPorId from '../hooks/usePerroPorId'
import styles from './PerroDetalle.module.css'

const PerroDetalle = () => {
  const { id } = useParams()
  const { data: perro, isLoading, error } = usePerroPorId(id)

  if (isLoading) return <p className={styles.loading}>Cargando...</p>
  if (error) return <p className={styles.loading}>Error: {error}</p>
  if (!perro) return null

  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src={perro.imagen} alt={perro.nombre} className={styles.image} />
      </div>
      <div className={styles.info}>
        <h2 className={styles.name}>{perro.nombre}</h2>
        <p className={styles.detail}><strong>Edad:</strong> {perro.edad}</p>
        <p className={styles.detail}><strong>Raza:</strong> {perro.raza}</p>
        <p className={styles.description}>{perro.descripcion}</p>
        <button className={styles.button}>Adóptame</button>
      </div>
    </section>
  )
}

export default PerroDetalle
