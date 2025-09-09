// src/components/test/PerroEncuesta.jsx
import React, { useState } from 'react'
import styles from './PerroEncuesta.module.css'
import { energia, apego, regulacion, exploracion, rasgos } from './data/perros'

const dimensiones = [
  { key: 'energia', label: 'Energía', items: energia },
  { key: 'apego', label: 'Apego y Vínculo', items: apego },
  { key: 'regulacion', label: 'Regulación Emocional', items: regulacion },
  { key: 'exploracion', label: 'Exploración y Libertad', items: exploracion }
]

// escala 0-4 (0 = mínimo, 4 = máximo)
const opciones = [
  { value: 0, label: '0' },
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' }
]

const PerroEncuesta = ({onFinish}) => {
  // respuestas guardadas por id -> valor 0..4
  const [answers, setAnswers] = useState({})
  const [error, setError] = useState(null)
  const [result, setResult] = useState(null)

  const totalPreguntas =
    energia.length + apego.length + regulacion.length + exploracion.length

  const handleChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: Number(value) }))
  }

  const calcularPromedio = (items) => {
    const vals = items.map((q) => Number(answers[q.id] ?? 0))
    // si no hay respuesta, contamos como undefined: para forzar completitud verificamos antes
    const suma = vals.reduce((a, b) => a + b, 0)
    return suma / items.length
  }

  const allAnswered = () => {
    const allIds = [
      ...energia.map((q) => q.id),
      ...apego.map((q) => q.id),
      ...regulacion.map((q) => q.id),
      ...exploracion.map((q) => q.id)
    ]
    return allIds.every((id) => answers[id] !== undefined)
  }

const handleSubmit = () => {
  setError(null)
  if (!allAnswered()) {
    setError('Por favor responde todas las preguntas antes de calcular el perfil.')
    return
  }

  const pEnergia = Number(calcularPromedio(energia).toFixed(2))
  const pApego = Number(calcularPromedio(apego).toFixed(2))
  const pRegulacion = Number(calcularPromedio(regulacion).toFixed(2))
  const pExploracion = Number(calcularPromedio(exploracion).toFixed(2))

  const vector = [pEnergia, pApego, pRegulacion, pExploracion]
  const indiceGlobal = Math.round(((pEnergia + pApego + pRegulacion + pExploracion) / 4) * 100) / 100

  const res = { vector, indiceGlobal }
  setResult(res)

  // 👇 notifica al padre
  if (onFinish) onFinish(res)
}


  const handleReset = () => {
    setAnswers({})
    setResult(null)
    setError(null)
  }

  return (
    <div className={styles.contenedor}>
      <h3 className={styles.titulo}>Encuesta de Perfil Canino (Simulada)</h3>

      <p className={styles.intro}>
        Esta encuesta es local: no necesita autenticación ni backend. Si recargas,
        se perderán las respuestas. Las preguntas usan una escala 0–4.
      </p>

      <div className={styles.encuesta}>
        {dimensiones.map((dim) => (
          <section key={dim.key} className={styles.dimension}>
            <h4 className={styles.dimTitulo}>{dim.label}</h4>
            <ol className={styles.listaPreguntas}>
              {dim.items.map((q, idx) => (
                <li key={q.id} className={styles.pregunta}>
                  <div className={styles.pTexto}>
                    <strong>{idx + 1}.</strong> {q.texto}
                  </div>
                  <div className={styles.opciones}>
                    {opciones.map((opt) => (
                      <label key={opt.value} className={styles.opcion}>
                        <input
                          type="radio"
                          name={q.id}
                          value={opt.value}
                          checked={answers[q.id] === opt.value}
                          onChange={(e) => handleChange(q.id, e.target.value)}
                        />
                        <span>{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </section>
        ))}

        <section className={styles.dimension}>
          <h4 className={styles.dimTitulo}>Dimensión 5 — Rasgos físicos (solo visualización)</h4>
          <div className={styles.rasgosGrid}>
            {rasgos.map((r) => (
              <div key={r.id} className={styles.rasgoCard}>
                <div className={styles.rasgoLabel}>{r.texto}</div>
                <div className={styles.rasgoValue}>{r.valor || '—'}</div>
                <small className={styles.rasgoNote}>
                  (No interactivo — no participa en el cálculo por ahora)
                </small>
              </div>
            ))}
          </div>
        </section>

        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.controls}>
          <button onClick={handleSubmit} className={styles.boton}>
            Calcular vector de perfil
          </button>
          <button onClick={handleReset} className={styles.botonSecundario}>
            Reiniciar
          </button>
        </div>

        {result && (
          <div className={styles.resultados}>
            <h4>Resultado</h4>
            <p>
              <strong>Vector perfil (4 dimensiones):</strong>{' '}
              [{result.vector.map((v) => v.toFixed(2)).join(', ')}]
            </p>
            <p>
              <strong>Índice global (promedio):</strong> {result.indiceGlobal.toFixed(2)} / 4
            </p>

   
          </div>
        )}
      </div>
    </div>
  )
}

export default PerroEncuesta
