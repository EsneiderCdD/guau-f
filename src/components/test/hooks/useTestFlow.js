// src/components/test/hooks/useTestFlow.js
import { useState, useMemo } from 'react'
import preguntas, { greetings, closings } from '../data'

function randomFrom(arr) {
  if (!arr || arr.length === 0) return null
  return arr[Math.floor(Math.random() * arr.length)]
}

export default function useTestFlow() {
  // index: -1 = saludo; 0..n-1 = preguntas; n = cierre; n+1 = finished
  const [index, setIndex] = useState(-1)
  const [answers, setAnswers] = useState({}) // { preguntaId: valor }
  const [startedAt] = useState(() => Date.now())

  const total = preguntas.length

  const greeting = useMemo(() => randomFrom(greetings), [])
  const closing = useMemo(() => randomFrom(closings), [])

  const estado = {
    index,
    total,
    saludo: index === -1,
    preguntaActual: index >= 0 && index < total ? preguntas[index] : null,
    cierre: index === total,
    finished: index > total
  }

  const start = () => setIndex(0)

  const answer = (id, valor) => {
    setAnswers((prev) => ({ ...prev, [id]: Number(valor) }))
    // Avanzar a la siguiente pregunta (o al cierre)
    setIndex((i) => {
      const next = i + 1
      if (next <= total) return next
      return total + 1
    })
  }

  const goBack = () => {
    setIndex((i) => Math.max(-1, i - 1))
  }

  const reset = () => {
    setAnswers({})
    setIndex(-1)
  }

  return {
    estado,
    greeting,
    closing,
    answers,
    start,
    answer,
    goBack,
    reset
  }
}
