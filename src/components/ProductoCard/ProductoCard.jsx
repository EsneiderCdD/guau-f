// src/components/ProductoCard/ProductoCard.jsx
import styles from './ProductoCard.module.css'

const ProductoCard = ({ producto }) => (
  <div className={styles.card}>
    <img className={styles.image} src={producto.imagen_url} alt={producto.nombre} />
    <h3 className={styles.title}>{producto.nombre}</h3>
    <p className={styles.price}>${producto.precio.toFixed(2)}</p>
    <p className={styles.stock}>Stock: {producto.stock}</p>
    <button className={styles.button}>Comprar</button>
  </div>
)

export default ProductoCard
