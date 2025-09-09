// src/components/test/Compatibilidad.jsx
import { useState } from 'react'
import styles from './Compatibilidad.module.css'

const D_MAX = Math.sqrt(4 * Math.pow(4, 2)) // 8

// Calcula compatibilidad entre dos vectores
const calcularCompatibilidad = (usuario, perro) => {
  if (!usuario || !perro) return null
  if (usuario.length !== perro.length) return null

  const distancia = Math.sqrt(
    usuario.reduce((acc, val, i) => acc + Math.pow(val - perro[i], 2), 0)
  )

  const compatibilidad = Math.max(
    0,
    Math.min(100, Math.round((1 - distancia / D_MAX) * 100))
  )
  return compatibilidad
}

const Compatibilidad = ({ perfilUsuario, perfilPerro }) => {
  const [resultado, setResultado] = useState(null)

  const handleCalcular = () => {
    const comp = calcularCompatibilidad(perfilUsuario, perfilPerro)
    setResultado(comp)
  }

  return (
    <div className={styles.contenedor}>
      <h3 className={styles.titulo}>Compatibilidad Usuario ↔ Perro</h3>

      {!perfilUsuario || !perfilPerro ? (
        <p className={styles.vacio}>
          Primero completa ambos perfiles para calcular la compatibilidad.
        </p>
      ) : (
        <>
          <div className={styles.vectores}>
            <p><strong>Perfil Usuario:</strong> [{perfilUsuario?.join(', ')}]</p>
            <p><strong>Perfil Perro:</strong> [{perfilPerro?.join(', ')}]</p>
          </div>

          <button onClick={handleCalcular} className={styles.boton}>
            Calcular Compatibilidad
          </button>

          {resultado !== null && (
            <div className={styles.resultado}>
              <p>
                ❤️ Compatibilidad: <strong>{resultado}%</strong>
              </p>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Compatibilidad
