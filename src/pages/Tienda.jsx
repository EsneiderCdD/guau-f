import Navbar from '../components/Navbar/Navbar'
import ProductoCard from '../components/ProductoCard/ProductoCard'
import useProductos from '../hooks/useProductos'
import styles from './Tienda.module.css'
import AdminPanel from '../components/Admin/AdminPanel'

const Tienda = () => {
  const { data: productos, isLoading, error } = useProductos()

  return (
    <>

      <header className={styles.header}>
        <img src="/Header2.webp" alt="Header background" className={styles.background} />
        <img src="/Gua-logo.png" alt="Gua Logo" className={styles.logo} />
      </header>

      <div className={styles.layout}>
        <Navbar />
      </div>

      {/* COLLAGE con grid */}
      <div className={styles.wrapper}> 
        <div className={styles.parent}>
          <div className={styles.div1}><img src="/tienda/tienda7.png" /></div>
          <div className={styles.div2}><img src="/tienda/tienda3.png" /></div>
          <div className={styles.div3}><img src="/tienda/tienda2.png" /></div>
          <div className={styles.div4}><img src="tienda/default.png" /></div>
          <div className={styles.div5}><img src="tienda/default.png" /></div>
          <div className={styles.div6}><img src="/tienda/tienda1.png" /></div>
          <div className={styles.div7}><img src="/tienda/tienda4.png" /></div>
          <div className={styles.div8}><img src="tienda/default.png" /></div>
          <div className={styles.div9}><img src="tienda/default.png" /></div>
          <div className={styles.div10}><img src="tienda/default.png" /></div>
        </div>
      </div>

      {/* Wrapper de productos (desactivado por ahora) */}
      <div className={styles.wrapper}>
        {/* 
        {isLoading && <p>Cargando productos...</p>}
        {error && <p>Error: {error}</p>}
        {productos.map(producto => (
          <ProductoCard key={producto.id} producto={producto} />
        ))} 
        */}
      </div>

      {/* <AdminPanel tabs={['productos']} /> */}
    </>
  )
}

export default Tienda
