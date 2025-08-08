import usePerrosAdmin from '@hooks/usePerrosAdmin'
import useProductosAdmin from '@hooks/useProductosAdmin'
import useAuthStore from '@store/authStore'

import AgregarPerroForm from './AgregarPerroForm'
import AgregarProductoForm from './AgregarProductoForm'

import PerroRow from './PerroRow'
import ProductoRow from './ProductoRow' 

import SolicitudesPanel from './SolicitudesPanel'
import styles from './AdminPanel.module.css'

const AdminPanel = () => {
  const {
    perros,
    setPerros,
    cargarPerros,
    isLoading: loadingPerros,
    error: errorPerros
  } = usePerrosAdmin()

  const {
    productos,
    setProductos,
    cargarProductos,
    isLoading: loadingProductos,
    error: errorProductos
  } = useProductosAdmin()

  const token = useAuthStore((state) => state.token)

  const handlePerroEliminado = (id) => {
    setPerros(perros.filter((p) => p.id !== id))
  }

  const handlePerroAgregado = () => {
    cargarPerros()
  }

  const handleProductoEliminado = (id) => {
    setProductos(productos.filter((p) => p.id !== id))
  }

  const handleProductoAgregado = () => {
    cargarProductos()
  }

  return (
    <div className={styles.container}>
      <h2>Panel de Administración</h2>

      {/* 🐶 Agregar Perro */}
      <AgregarPerroForm token={token} onPerroAgregado={handlePerroAgregado} />

      {errorPerros && <p className={styles.error}>{errorPerros}</p>}
      {loadingPerros && <p>Cargando perros...</p>}

      <h3>Lista de Perros</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Tiempo</th>
            <th>Experiencia</th>
            <th>Apego</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {perros.map((perro) => (
            <PerroRow
              key={perro.id}
              perro={perro}
              token={token}
              onDelete={handlePerroEliminado}
            />
          ))}
        </tbody>
      </table>

      {/* 🛒 Agregar Producto */}
      <AgregarProductoForm onProductoAgregado={handleProductoAgregado} />

      {errorProductos && <p className={styles.error}>{errorProductos}</p>}
      {loadingProductos && <p>Cargando productos...</p>}

      <h3>Lista de Productos</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <ProductoRow
              key={producto.id}
              producto={producto}
              token={token}
              onDelete={handleProductoEliminado}
            />
          ))}
        </tbody>
      </table>

      <SolicitudesPanel />
    </div>
  )
}

export default AdminPanel
