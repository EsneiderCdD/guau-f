// src/components/test/Pregunta.jsx
import styles from './Pregunta.module.css'

const Pregunta = ({ pregunta, onChange, valorSeleccionado }) => {
  const { texto, opciones, id } = pregunta

  return (
    <div className={styles.pregunta}>
      <p className={styles.texto}>{texto}</p>
      <div className={styles.opciones}>
        {opciones.map((opcion) => (
          <label key={opcion.valor} className={styles.opcion}>
            <input
              type="radio"
              name={id}
              value={opcion.valor}
              checked={valorSeleccionado === opcion.valor}
              onChange={() => onChange(id, opcion.valor)}
            />
            {opcion.label}
          </label>
        ))}
      </div>
    </div>
  )
}

export default Pregunta
