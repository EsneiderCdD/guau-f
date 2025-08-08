
import styles from './Pregunta.module.css'

const Pregunta = ({ texto, opciones, onChange, valorSeleccionado }) => {
  return (
    <div className={styles.pregunta}>
      <p className={styles.texto}>{texto}</p>
      <div className={styles.opciones}>
        {opciones.map((opcion) => (
          <label key={opcion.valor} className={styles.opcion}>
            <input
              type="radio"
              name={texto}
              value={opcion.valor}
              checked={valorSeleccionado === opcion.valor}
              onChange={() => onChange(opcion.valor)}
            />
            {opcion.label}
          </label>
        ))}
      </div>
    </div>
  )
}

export default Pregunta
