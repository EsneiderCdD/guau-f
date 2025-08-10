// src/pages/Tienda.jsx
import Navbar from '../components/Navbar/Navbar'
import ProductoCard from '../components/ProductoCard/ProductoCard'
import useProductos from '../hooks/useProductos'
import styles from './Tienda.module.css'

const Tienda = () => {
  const { data: productos, isLoading, error } = useProductos()

  return (
    <>
      <Navbar />
      <header className={styles.header}>
        <img src="/Header2.png" alt="Header background" className={styles.background} />
        <img src="/Gua-logo.png" alt="Gua Logo" className={styles.logo} />
      </header>
      <div className={styles.wrapper}>
        {isLoading && <p>Cargando productos...</p>}
        {error && <p>Error: {error}</p>}
        {productos.map(producto => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </div>
    </>
  )
}

export default Tienda
