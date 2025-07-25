import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { obtenerPerroPorId } from '../services/perrosService'
import styles from './PerroDetalle.module.css'

const PerroDetalle = () => {
  const { id } = useParams()
  const [perro, setPerro] = useState(null)

  useEffect(() => {
    obtenerPerroPorId(id).then(data => setPerro(data))
  }, [id])

  if (!perro) return <p className={styles.loading}>Cargando...</p>

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

