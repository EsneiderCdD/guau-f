import usePerrosAdmin from '@hooks/usePerrosAdmin' // ✅ Nuevo hook
import useAuthStore from '@store/authStore'
import AgregarPerroForm from './AgregarPerroForm'
import PerroRow from './PerroRow'
import styles from './AdminPanel.module.css'

const AdminPanel = () => {
  const {
    perros,
    setPerros,
    cargarPerros,
    isLoading,
    error
  } = usePerrosAdmin()

  const token = useAuthStore((state) => state.token)

  // 🗑️ Eliminar visualmente un perro después del DELETE
  const handlePerroEliminado = (id) => {
    setPerros(perros.filter((p) => p.id !== id))
  }

  // ➕ Recargar todos tras agregar para mantener orden y evitar problemas
  const handlePerroAgregado = () => {
    cargarPerros()
  }

  return (
    <div className={styles.container}>
      <h2>Panel de Administración</h2>

      {/* ✅ Formulario para agregar */}
      <AgregarPerroForm token={token} onPerroAgregado={handlePerroAgregado} />

      {/* ❗ Mostrar errores si hay */}
      {error && <p className={styles.error}>{error}</p>}
      {isLoading && <p>Cargando perros...</p>}

      {/* 📋 Tabla de perros */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Edad</th>
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
    </div>
  )
}

export default AdminPanel
