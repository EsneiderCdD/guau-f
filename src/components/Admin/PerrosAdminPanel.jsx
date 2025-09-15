import { useState } from 'react'
import usePerrosAdmin from '@hooks/usePerrosAdmin'
import AgregarPerroForm from './AgregarPerroForm'
import EditarPerroForm from './EditarPerroForm'
import PerroRow from './PerroRow'
import styles from './AdminPanel.module.css'
import PerroEncuesta from '@components/test/PerroEncuesta'
import useActualizarPerro from '@hooks/useActualizarPerro'
import useAuthStore from '@store/authStore'

const PerrosAdminPanel = ({ token }) => {
  const {
    perros,
    setPerros,
    cargarPerros,
    isLoading,
    error
  } = usePerrosAdmin()

  const [perroSeleccionado, setPerroSeleccionado] = useState(null)
  const [perroMatch, setPerroMatch] = useState(null)

  const authToken = useAuthStore((state) => state.token)
  const { actualizarPerro } = useActualizarPerro(authToken)

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
              onEdit={setPerroSeleccionado}
              onMatch={setPerroMatch}
            />
          ))}
        </tbody>
      </table>

      {perroSeleccionado && (
        <EditarPerroForm
          perro={perroSeleccionado}
          token={token}
          onPerroActualizado={cargarPerros}
          onCancel={() => setPerroSeleccionado(null)}
        />
      )}

      {perroMatch && (
        <PerroEncuesta
          perro={perroMatch}
          onComplete={async (res) => {
            try {
              // res.vector = [energia, regulacion_emocional, apego_vinculo, exploracion_libertad]
              const perroData = {
                energia: Math.round(res.vector[0]),
                regulacion_emocional: Math.round(res.vector[1]),
                apego_vinculo: Math.round(res.vector[2]),
                exploracion_libertad: Math.round(res.vector[3])
              }

              await actualizarPerro(perroMatch.id, perroData)
              alert(`✅ Dimensiones guardadas para ${perroMatch.nombre}`)
              cargarPerros()
              setPerroMatch(null)
            } catch (err) {
              console.error('Error guardando dimensiones:', err)
              alert('❌ No se pudo guardar el vector')
            }
          }}
          onCancel={() => setPerroMatch(null)}
        />
      )}
    </div>
  )
}

export default PerrosAdminPanel
