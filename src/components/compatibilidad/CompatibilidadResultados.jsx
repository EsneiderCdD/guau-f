// src/components/compatibilidad/CompatibilidadResultados.jsx
import React from "react"

const CompatibilidadResultados = ({ usuarioVector, resultados }) => {
  if (!usuarioVector || !resultados) return null

  return (
    <div>
      <h3>Mi Compatibilidad</h3>
      <p>
        <strong>Mi vector:</strong> [{usuarioVector.join(", ")}]
      </p>
      <ul>
        {resultados.map((r) => (
          <li key={r.perro_id}>
            🐶 {r.nombre} → Compatibilidad: {r.compatibilidad}%
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CompatibilidadResultados
