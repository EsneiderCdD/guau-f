// src/components/ProductoCard/ProductoCard.jsx
import { useState } from 'react'
import useAuthStore from '@store/authStore'
import useComprarProducto from '@hooks/useComprarProducto'
import styles from './ProductoCard.module.css'

const ProductoCard = ({ producto }) => {
  const token = useAuthStore((state) => state.token)
  const { comprar, isLoading } = useComprarProducto(token)
  const [mensaje, setMensaje] = useState(null)

  const handleComprar = async () => {
    try {
      await comprar({ producto_id: producto.id })
      alert(`¡Compra exitosa de ${producto.nombre}!`)
    } catch (err) {
      if (err.message.includes('autenticado')) {
        alert('Debes iniciar sesión para comprar.')
      } else if (err.message.toLowerCase().includes('stock')) {
        alert('No hay suficiente inventario disponible.')
      } else {
        alert(err.message)
      }
    }
  }

  return (
    <div className={styles.card}>
      <img className={styles.image} src={producto.imagen_url} alt={producto.nombre} />
      <h3 className={styles.title}>{producto.nombre}</h3>
      <p className={styles.price}>${producto.precio.toFixed(2)}</p>
      <p className={styles.stock}>Stock: {producto.stock}</p>
      <button
        className={styles.button}
        onClick={handleComprar}
        disabled={isLoading}
      >
        {isLoading ? 'Procesando...' : 'Comprar'}
      </button>
    </div>
  )
}

export default ProductoCard
