// src/components/Admin/PerroRow.jsx
import useAuthStore from '@store/authStore'
import styles from './AdminPanel.module.css'

const PerroRow = ({ perro, onDelete }) => {
  const token = useAuthStore((state) => state.token)

  const handleDelete = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:5000/perros/${perro.id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Error al eliminar')
      }

      onDelete(perro.id)
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <tr>
      <td>{perro.id}</td>
      <td>{perro.nombre}</td>
      <td>{perro.edad}</td>
      <td>{perro.raza}</td>
      <td>
        <button onClick={handleDelete}>Eliminar</button>
      </td>
    </tr>
  )
}

export default PerroRow
