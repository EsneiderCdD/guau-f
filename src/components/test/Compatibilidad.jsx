// src/components/test/Compatibilidad.jsx

import { useEffect, useState } from 'react'
import styles from './Compatibilidad.module.css'
import useAuthStore from '@store/authStore'

const Compatibilidad = () => {
  const { user, token } = useAuthStore()
  const [resultados, setResultados] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const obtenerCompatibilidad = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:5000/match/${user?.id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        const data = await res.json()

        if (!res.ok) {
          throw new Error(data.error || 'Error al obtener compatibilidad')
        }

        setResultados(data)
      } catch (err) {
        setError(err.message)
      }
    }

    if (user?.id && token) {
      obtenerCompatibilidad()
    }
  }, [user, token])

  return (
    <div className={styles.contenedor}>
      <h3 className={styles.titulo}>Resultados de Compatibilidad</h3>

      {error && <p className={styles.error}>{error}</p>}

      {resultados.length > 0 ? (
        <ul className={styles.lista}>
          {resultados.map((perro) => (
            <li key={perro.perro_id} className={styles.item}>
              🐶 {perro.nombre}: <strong>{perro.compatibilidad}%</strong>
            </li>
          ))}
        </ul>
      ) : (
        !error && <p className={styles.vacio}>No hay resultados para mostrar.</p>
      )}
    </div>
  )
}

export default Compatibilidad
