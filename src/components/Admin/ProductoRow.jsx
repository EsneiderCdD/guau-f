// src/components/Admin/ProductoRow.jsx
import { deleteProducto } from '@utils/fetchProductos'

const ProductoRow = ({ producto, token, onDelete }) => {
  const handleDelete = async () => {
    if (!confirm(`¿Eliminar producto "${producto.nombre}"?`)) return
    try {
      await deleteProducto(producto.id, token)
      onDelete(producto.id)
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <tr>
      <td>{producto.id}</td>
      <td>{producto.nombre}</td>
      <td>{producto.precio}</td>
      <td>{producto.stock}</td>
      <td>
        <button onClick={handleDelete}>Eliminar</button>
      </td>
    </tr>
  )
}

export default ProductoRow
