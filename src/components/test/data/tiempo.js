// src/components/test/data/tiempo.js
const tiempo = [
  {
    id: 'tiempo_1',
    dimension: 'tiempo',
    tipo: 'likert',
    texto: '¿Cuántas horas al día pasas en casa normalmente?',
    opciones: [
      { valor: 1, label: 'Menos de 1 hora' },
      { valor: 2, label: 'Entre 1 y 3 horas' },
      { valor: 3, label: 'Más de 3 horas' }
    ],
    orden: 1
  },
  {
    id: 'tiempo_2',
    dimension: 'tiempo',
    tipo: 'likert',
    texto: '¿Podrías sacar a pasear a tu perro todos los días?',
    opciones: [
      { valor: 1, label: 'Rara vez' },
      { valor: 2, label: 'A veces' },
      { valor: 3, label: 'Siempre' }
    ],
    orden: 2
  },
  {
    id: 'tiempo_3',
    dimension: 'tiempo',
    tipo: 'likert',
    texto: '¿Cuánto tiempo diario podrías dedicar a jugar con tu perro?',
    opciones: [
      { valor: 1, label: 'Menos de 30 minutos' },
      { valor: 2, label: '30-60 minutos' },
      { valor: 3, label: 'Más de 1 hora' }
    ],
    orden: 3
  },
  {
    id: 'tiempo_4',
    dimension: 'tiempo',
    tipo: 'likert',
    texto: '¿Con qué frecuencia trabajas fuera de casa?',
    opciones: [
      { valor: 3, label: 'Rara vez o nunca' },
      { valor: 2, label: 'Algunos días' },
      { valor: 1, label: 'Todos los días' }
    ],
    orden: 4
  },
  {
    id: 'tiempo_5',
    dimension: 'tiempo',
    tipo: 'likert',
    texto: '¿Podrías ajustar tu agenda para atender a tu perro?',
    opciones: [
      { valor: 1, label: 'No, mi agenda es fija' },
      { valor: 2, label: 'En parte' },
      { valor: 3, label: 'Sí, sin problema' }
    ],
    orden: 5
  }
]

export default tiempo
