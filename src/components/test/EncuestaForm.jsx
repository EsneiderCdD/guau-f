// src/components/test/EncuestaForm.jsx
import React, { useState } from 'react'
import styles from './PerroEncuesta.module.css' // reutilizamos el estilo
import { tiempo, experiencia, apego, motivacion, rasgos } from './data/usuarios'

const dimensiones = [
  { key: 'tiempo', label: 'Tiempo Disponible', items: tiempo },
  { key: 'experiencia', label: 'Experiencia', items: experiencia },
  { key: 'apego', label: 'Apego Emocional', items: apego },
  { key: 'motivacion', label: 'Motivación', items: motivacion }
]

const opciones = [
  { value: 0, label: '0' },
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' }
]

const EncuestaForm = ({ onComplete }) => {
  const [answers, setAnswers] = useState({})
  const [error, setError] = useState(null)
  const [result, setResult] = useState(null)

  const handleChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: Number(value) }))
  }

  const calcularPromedio = (items) => {
    const vals = items.map((q) => Number(answers[q.id] ?? 0))
    return vals.reduce((a, b) => a + b, 0) / items.length
  }

  const allAnswered = () => {
    const allIds = dimensiones.flatMap((d) => d.items.map((q) => q.id))
    return allIds.every((id) => answers[id] !== undefined)
  }

  const handleSubmit = () => {
    setError(null)
    if (!allAnswered()) {
      setError('Por favor responde todas las preguntas.')
      return
    }

    const pTiempo = Number(calcularPromedio(tiempo).toFixed(2))
    const pExp = Number(calcularPromedio(experiencia).toFixed(2))
    const pApego = Number(calcularPromedio(apego).toFixed(2))
    const pMotiv = Number(calcularPromedio(motivacion).toFixed(2))

    const vector = [pTiempo, pExp, pApego, pMotiv]
    const indiceGlobal = Math.round(((pTiempo + pExp + pApego + pMotiv) / 4) * 100) / 100

    const res = { vector, indiceGlobal }
    setResult(res)

    // 👇 notifica al padre
    if (onComplete) onComplete(res)
  }

  const handleReset = () => {
    setAnswers({})
    setResult(null)
    setError(null)
  }

  return (
    <div className={styles.contenedor}>
      <h3 className={styles.titulo}>Encuesta de Perfil de Usuario (Simulada)</h3>
      <p className={styles.intro}>
        Esta encuesta no usa backend. Si recargas, se perderán las respuestas.
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
          <h4 className={styles.dimTitulo}>Rasgos de contexto (solo visualización)</h4>
          <div className={styles.rasgosGrid}>
            {rasgos.map((r) => (
              <div key={r.id} className={styles.rasgoCard}>
                <div className={styles.rasgoLabel}>{r.texto}</div>
                <div className={styles.rasgoValue}>{r.valor || '—'}</div>
                <small className={styles.rasgoNote}>
                  (No interactivo — no participa en el cálculo)
                </small>
              </div>
            ))}
          </div>
        </section>

        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.controls}>
          <button onClick={handleSubmit} className={styles.boton}>
            Calcular perfil de usuario
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
              <strong>Índice global:</strong> {result.indiceGlobal.toFixed(2)} / 4
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default EncuestaForm
