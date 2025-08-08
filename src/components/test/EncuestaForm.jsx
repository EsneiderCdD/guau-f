import { useState } from 'react'
import preguntas from './preguntas'
import styles from './EncuestaForm.module.css'
import useAuthStore from '@store/authStore'

const EncuestaForm = () => {
  const [respuestas, setRespuestas] = useState({})
  const [error, setError] = useState(null)
  const [mensaje, setMensaje] = useState(null)
  const { token } = useAuthStore()

  // Función para manejar cambios de respuesta
  const handleChange = (id, valor) => {
    setRespuestas((prev) => ({
      ...prev,
      [id]: valor
    }))
  }

  // Calcular score del tiempo
  const calcularScoreTiempo = () => {
    const tiempoKeys = ['tiempo_1', 'tiempo_2', 'tiempo_3', 'tiempo_4', 'tiempo_5']
    const valores = tiempoKeys.map((key) => Number(respuestas[key]))
    const suma = valores.reduce((acc, val) => acc + val, 0)
    const promedio = suma / tiempoKeys.length
    return Math.round(promedio)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setMensaje(null)

    // Validación
    const tiempoKeys = ['tiempo_1', 'tiempo_2', 'tiempo_3', 'tiempo_4', 'tiempo_5']
    const incompletasTiempo = tiempoKeys.some((key) => respuestas[key] === undefined)
    if (incompletasTiempo || respuestas.experiencia === undefined || respuestas.apego_emocional === undefined) {
      setError('Por favor responde todas las preguntas.')
      return
    }

    // Calcular score de tiempo
    const tiempo_disponible = calcularScoreTiempo()

    try {
      const res = await fetch('http://127.0.0.1:5000/match/responder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          tiempo_disponible,
          experiencia: respuestas.experiencia,
          apego_emocional: respuestas.apego_emocional
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
                checked={respuestas[pregunta.id] == opcion.valor}
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
