// src/components/Admin/PerroRow.jsx
import { deletePerro } from '@utils/fetchPerros' // ✅ NUEVO
import styles from './AdminPanel.module.css'

const PerroRow = ({ perro, token, onDelete }) => {
  const handleDelete = async () => {
    if (!confirm(`¿Seguro que deseas eliminar a ${perro.nombre}?`)) return

    try {
      await deletePerro(perro.id, token) // ✅ USO DE FUNCIÓN REUTILIZABLE
      onDelete(perro.id)
    } catch (err) {
      alert(err.message || 'Error al eliminar perro')
    }
  }

  return (
    <tr>
      <td>{perro.id}</td>
      <td>{perro.nombre}</td>
      <td>{perro.edad}</td>
      <td>
        <button className={styles.deleteButton} onClick={handleDelete}>
          Eliminar
        </button>
      </td>
    </tr>
  )
}

export default PerroRow
