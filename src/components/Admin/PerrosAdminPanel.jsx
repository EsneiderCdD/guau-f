import { useState } from 'react'
import usePerrosAdmin from '@hooks/usePerrosAdmin'
import AgregarPerroForm from './AgregarPerroForm'
import EditarPerroForm from './EditarPerroForm'
import PerroRow from './PerroRow'
import styles from './AdminPanel.module.css'

const PerrosAdminPanel = ({ token }) => {
  const {
    perros,
    setPerros,
    cargarPerros,
    isLoading,
    error
  } = usePerrosAdmin()

  const [perroSeleccionado, setPerroSeleccionado] = useState(null)

  const handlePerroEliminado = (id) => {
    setPerros(perros.filter((p) => p.id !== id))
  }

  const handlePerroAgregado = () => {
    cargarPerros()
  }

  return (
    <div>
      <AgregarPerroForm token={token} onPerroAgregado={handlePerroAgregado} />

      {error && <p className={styles.error}>{error}</p>}
      {isLoading && <p>Cargando perros...</p>}

      <h3>Lista de Perros</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Energía</th>
            <th>Emocion</th>
            <th>Apego</th>
            <th>Exploracion</th>
          </tr>
        </thead>
        <tbody>
          {perros.map((perro) => (
            <PerroRow
              key={perro.id}
              perro={perro}
              token={token}
              onDelete={handlePerroEliminado}
              onEdit={setPerroSeleccionado}
            />
          ))}
        </tbody>
      </table>

      {perroSeleccionado && (
        <EditarPerroForm
          perro={perroSeleccionado}
          token={token}
          onPerroActualizado={cargarPerros}           // Refresca la lista
          onCancel={() => setPerroSeleccionado(null)} // Cierra el formulario
        />
      )}
    </div>
  )
}

export default PerrosAdminPanel
