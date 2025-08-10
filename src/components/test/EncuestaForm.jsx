// src/components/test/EncuestaForm.jsx
import React, { useState } from 'react'
import useTestFlow from './hooks/useTestFlow'
import Pregunta from './Pregunta'
import styles from './EncuestaForm.module.css'
import useAuthStore from '@store/authStore'
import preguntas from './preguntas' // para cálculo final

const EncuestaForm = ({ onComplete }) => {
  const { token } = useAuthStore()
  const {
    estado,
    greeting,
    closing,
    answers,
    start,
    answer,
    goBack
  } = useTestFlow()

  const [error, setError] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [mensaje, setMensaje] = useState(null)

  // util: agrupa los ids por dimensión
  const gruposPorDimension = preguntas.reduce((acc, p) => {
    acc[p.dimension] = acc[p.dimension] || []
    acc[p.dimension].push(p.id)
    return acc
  }, {})

  const calcularScore = (keys) => {
    const valores = keys.map((key) => Number(answers[key] || 0))
    const suma = valores.reduce((acc, val) => acc + val, 0)
    const promedio = suma / keys.length
    return Math.round(promedio)
  }

  const calcularBinario = (keys) => {
    const valores = keys.map((key) => Number(answers[key] || 0))
    const suma = valores.reduce((acc, val) => acc + val, 0)
    return suma >= Math.ceil(keys.length / 2) ? 1 : 0
  }

  const handleSubmit = async () => {
    setError(null)
    setMensaje(null)

    // Validar que todas las preguntas tengan respuesta
    const todosLosIds = preguntas.map((p) => p.id)
    const incompletas = todosLosIds.some((id) => answers[id] === undefined)

    if (incompletas) {
      setError('Por favor responde todas las preguntas antes de enviar.')
      return
    }

    // Calcular scores por dimensión (los nombres del backend)
    const tiempo_disponible = calcularScore(gruposPorDimension['tiempo'] || [])
    const experiencia = calcularBinario(gruposPorDimension['experiencia'] || [])
    const apego_emocional = calcularScore(gruposPorDimension['apego'] || [])

    setSubmitting(true)
    try {
      const res = await fetch('http://127.0.0.1:5000/match/responder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          tiempo_disponible,
          experiencia,
          apego_emocional
        })
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Error al enviar el formulario')

      setMensaje(data.mensaje)
      // notificar al componente padre que el test terminó correctamente
      onComplete && onComplete()
    } catch (err) {
      setError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  // Handler para cuando el usuario selecciona una opción en la pregunta actual
  const handleOptionSelect = (id, valor) => {
    // delegar al hook (guarda y avanza)
    answer(id, valor)
  }

  return (
    <div className={styles.formWrapper}>
      <div className={styles.formContainer}>
        {estado.saludo && (
          <div className={styles.bubble}>
            <p>{greeting}</p>
            <button onClick={start} className={styles.boton}>Comenzar</button>
          </div>
        )}

        {estado.preguntaActual && (
          <div className={styles.questionBlock}>
            <Pregunta
              pregunta={estado.preguntaActual}
              onChange={handleOptionSelect}
              valorSeleccionado={answers[estado.preguntaActual.id]}
            />
            <div className={styles.controls}>
              <button onClick={goBack} className={styles.botonSecundario}>Atrás</button>
              <p className={styles.indicador}>Pregunta {estado.index + 1} de {estado.total}</p>
            </div>
          </div>
        )}

        {estado.cierre && (
          <div className={styles.bubble}>
            <p>{closing}</p>
            <button onClick={handleSubmit} className={styles.boton} disabled={submitting}>
              {submitting ? 'Enviando...' : 'Enviar y ver resultados'}
            </button>
            {error && <p className={styles.error}>{error}</p>}
            {mensaje && <p className={styles.success}>{mensaje}</p>}
          </div>
        )}

        {estado.finished && (
          <div className={styles.finishedMessage}>
            <p className={styles.success}>Finalizado. Puedes ver los resultados.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default EncuestaForm
