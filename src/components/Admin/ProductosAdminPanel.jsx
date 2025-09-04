import useProductosAdmin from '@hooks/useProductosAdmin'
import AgregarProductoForm from './AgregarProductoForm'
import ProductoRow from './ProductoRow'
import styles from './AdminPanel.module.css'

const ProductosAdminPanel = ({ token }) => {
  const {
    productos,
    setProductos,
    cargarProductos,
    isLoading,
    error
  } = useProductosAdmin()

  const handleProductoEliminado = (id) => {
    setProductos(productos.filter((p) => p.id !== id))
  }

  const handleProductoAgregado = () => {
    cargarProductos()
  }

  return (
    <div>
      <AgregarProductoForm onProductoAgregado={handleProductoAgregado} />

      {error && <p className={styles.error}>{error}</p>}
      {isLoading && <p>Cargando productos...</p>}

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
    </div>
  )
}

export default ProductosAdminPanel
