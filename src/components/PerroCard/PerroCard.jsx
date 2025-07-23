import { Link } from 'react-router-dom'
import styles from './PerroCard.module.css'

const PerroCard = ({ perro }) => (
  <div className={styles.card}>
    <img className={styles.image} src={perro.imagen} alt={perro.nombre} />
    <h3 className={styles.title}>{perro.nombre}</h3>
    <p className={styles.race}>{perro.raza}</p>
    <Link className={styles.link} to={`/perros/${perro.id}`}>Ver más</Link>
  </div>
)

export default PerroCard
