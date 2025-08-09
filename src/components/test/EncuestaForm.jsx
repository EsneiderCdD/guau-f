import { useState } from 'react'
import preguntas from './preguntas'
import styles from './EncuestaForm.module.css'
import useAuthStore from '@store/authStore'

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

  // Calcular score promedio para dimensiones Likert
  const calcularScore = (keys) => {
    const valores = keys.map((key) => Number(respuestas[key]))
    const suma = valores.reduce((acc, val) => acc + val, 0)
    const promedio = suma / keys.length
    return Math.round(promedio)
  }

  // Calcular resultado binario para experiencia
  const calcularBinario = (keys) => {
    const valores = keys.map((key) => Number(respuestas[key]))
    const suma = valores.reduce((acc, val) => acc + val, 0)
    return suma >= Math.ceil(keys.length / 2) ? 1 : 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setMensaje(null)

    const tiempoKeys = ['tiempo_1', 'tiempo_2', 'tiempo_3', 'tiempo_4', 'tiempo_5']
    const experienciaKeys = ['experiencia_1', 'experiencia_2', 'experiencia_3', 'experiencia_4', 'experiencia_5']
    const apegoKeys = ['apego_1', 'apego_2', 'apego_3', 'apego_4', 'apego_5']

    // Validar que todas las preguntas tengan respuesta
    const incompletas = [...tiempoKeys, ...experienciaKeys, ...apegoKeys]
      .some((key) => respuestas[key] === undefined)

    if (incompletas) {
      setError('Por favor responde todas las preguntas.')
      return
    }

    // Calcular puntajes
    const tiempo_disponible = calcularScore(tiempoKeys)       // 1–3
    const experiencia = calcularBinario(experienciaKeys)      // 0–1
    const apego_emocional = calcularScore(apegoKeys)          // 1–3

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
        <div key={pregunta.id} className={styles.pregunta}>
          <p className={styles.texto}>{pregunta.texto}</p>
          {pregunta.opciones.map((opcion) => (
            <label key={opcion.valor} className={styles.opcion}>
              <input
                type="radio"
                name={pregunta.id}
                value={opcion.valor}
                checked={respuestas[pregunta.id] === opcion.valor}
                onChange={() => handleChange(pregunta.id, opcion.valor)}
              />
              {opcion.label}
            </label>
          ))}
        </div>
      ))}

      <button type="submit" className={styles.boton}>Enviar</button>

      {error && <p className={styles.error}>{error}</p>}
      {mensaje && <p className={styles.success}>{mensaje}</p>}
    </form>
  )
}

export default EncuestaForm
