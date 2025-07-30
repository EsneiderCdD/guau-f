import { useEffect, useState } from 'react'
import { getPerros } from '@utils/fetchPerros'
import useAuthStore from '@store/authStore'
import AgregarPerroForm from './AgregarPerroForm'
import PerroRow from './PerroRow'
import styles from './AdminPanel.module.css'

const AdminPanel = () => {
  const [perros, setPerros] = useState([])
  const [error, setError] = useState(null)
  const token = useAuthStore((state) => state.token)

  // 🔄 Cargar todos los perros desde la API
  const cargarPerros = async () => {
    try {
      const lista = await getPerros()
      setPerros(lista)
    } catch (err) {
      setError('No se pudieron cargar los perros')
    }
  }

  // ⏱️ Cargar al iniciar
  useEffect(() => {
    cargarPerros()
  }, [])

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

      {/* 📋 Tabla de perros */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Edad</th>
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
