// src/components/test/EncuestaForm.jsx
import { useState } from 'react'
import preguntas from './preguntas'
import styles from './EncuestaForm.module.css'
import useAuthStore from '@store/authStore'
import Pregunta from './Pregunta'

const EncuestaForm = () => {
  const [respuestas, setRespuestas] = useState({})
  const [error, setError] = useState(null)
  const [mensaje, setMensaje] = useState(null)
  const { token } = useAuthStore()

  const handleChange = (id, valor) => {
    setRespuestas((prev) => ({
      ...prev,
      [id]: Number(valor)
    }))
  }

  // util: agrupa los ids por dimensión
  const gruposPorDimension = preguntas.reduce((acc, p) => {
    acc[p.dimension] = acc[p.dimension] || []
    acc[p.dimension].push(p.id)
    return acc
  }, {})

  const calcularScore = (keys) => {
    const valores = keys.map((key) => Number(respuestas[key]))
    const suma = valores.reduce((acc, val) => acc + val, 0)
    const promedio = suma / keys.length
    return Math.round(promedio)
  }

  const calcularBinario = (keys) => {
    const valores = keys.map((key) => Number(respuestas[key]))
    const suma = valores.reduce((acc, val) => acc + val, 0)
    return suma >= Math.ceil(keys.length / 2) ? 1 : 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setMensaje(null)

    // Validar que todas las preguntas tengan respuesta
    const todosLosIds = preguntas.map((p) => p.id)
    const incompletas = todosLosIds.some((id) => respuestas[id] === undefined)

    if (incompletas) {
      setError('Por favor responde todas las preguntas.')
      return
    }

    // Calcular scores por dimensión (nombres de campo que espera el backend)
    const tiempo_disponible = calcularScore(gruposPorDimension['tiempo'] || [])
    const experiencia = calcularBinario(gruposPorDimension['experiencia'] || [])
    const apego_emocional = calcularScore(gruposPorDimension['apego'] || [])

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

      if (!res.ok) {
        throw new Error(data.error || 'Error al enviar el formulario')
      }

      setMensaje(data.mensaje)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Test de Compatibilidad</h2>

      {preguntas.map((pregunta) => (
        <Pregunta
          key={pregunta.id}
          pregunta={pregunta}
          onChange={handleChange}
          valorSeleccionado={respuestas[pregunta.id]}
        />
      ))}

      <button type="submit" className={styles.boton}>Enviar</button>

      {error && <p className={styles.error}>{error}</p>}
      {mensaje && <p className={styles.success}>{mensaje}</p>}
    </form>
  )
}

export default EncuestaForm
