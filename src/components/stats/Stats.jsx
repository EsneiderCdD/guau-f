import styles from "./Stats.module.css"

const atributosDemo = [
  { nombre: "Apego", nivel: 5 },
  { nombre: "Necesidad social", nivel: 4 },
  { nombre: "Energía", nivel: 3 },
  { nombre: "Cariño", nivel: 5 },
  { nombre: "Juego", nivel: 4 },
  { nombre: "Paciencia", nivel: 3 },
]

const Stats = () => {
  return (
    <div className={styles.statsContainer}>
      {atributosDemo.map((atributo, idx) => (
        <div key={idx} className={styles.statItem}>
          <span className={styles.label}>{atributo.nombre}:</span>
          <span className={styles.icons}>
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`${styles.paw} ${i < atributo.nivel ? styles.filled : ""}`}
              >
                🐾
              </span>
            ))}
          </span>
        </div>
      ))}
    </div>
  )
}

export default Stats
