import useSolicitudesAdmin from '@hooks/useSolicitudesAdmin'
import styles from './AdminPanel.module.css'

const SolicitudesPanel = () => {
  const {
    solicitudes,
    isLoading,
    error,
    eliminarSolicitud
  } = useSolicitudesAdmin()

  const handleDelete = async (id) => {
    if (!confirm('¿Estás seguro de eliminar esta solicitud?')) return
    try {
      await eliminarSolicitud(id)
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <div className={styles.container}>
      <h2>Solicitudes de Adopción</h2>

      {error && <p className={styles.error}>{error}</p>}
      {isLoading && <p>Cargando solicitudes...</p>}

      {!isLoading && solicitudes.length === 0 && <p>No hay solicitudes.</p>}

      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Mensaje</th>
            <th>Perro ID</th>
            <th>Usuario ID</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {solicitudes.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.mensaje}</td>
              <td>{s.perro_id}</td>
              <td>{s.usuario_id}</td>
              <td>{s.estado}</td>
              <td>
                <button
                  className={styles.deleteButton}
                  onClick={() => handleDelete(s.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SolicitudesPanel
