import useEliminarPerro from '@hooks/useEliminarPerro'
import styles from './AdminPanel.module.css'

const PerroRow = ({ perro, onDelete, onEdit }) => {
  const { eliminarPerro, error } = useEliminarPerro()

  const handleDelete = async () => {
    if (!confirm(`¿Seguro que deseas eliminar a ${perro.nombre}?`)) return
    try {
      await eliminarPerro(perro.id)
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
      <td>{perro.energia}</td>
      <td>{perro.regulacion_emocional}</td>
      <td>{perro.apego_vinculo}</td>
      <td>{perro.exploracion_libertad}</td>
      <td>
        <button className={styles.deleteButton} onClick={handleDelete}>
          Eliminar
        </button>
        <button
          className={styles.editButton}
          onClick={() => onEdit(perro)}
        >
          Editar
        </button>

        {error && <p className={styles.error}>{error}</p>}
      </td>
    </tr>
  )
}

export default PerroRow
