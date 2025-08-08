const preguntas = [
  // 5 preguntas para tiempo_disponible
  {
    id: 'tiempo_1',
    texto: '¿Cuántas horas puedes dedicar a pasear a tu perro cada día?',
    opciones: [
      { valor: 1, label: 'Menos de 1 hora' },
      { valor: 2, label: 'Entre 1 y 3 horas' },
      { valor: 3, label: 'Más de 3 horas' }
    ]
  },
  {
    id: 'tiempo_2',
    texto: '¿Cuánto tiempo puedes dedicar a jugar con tu perro al día?',
    opciones: [
      { valor: 1, label: 'Menos de 30 minutos' },
      { valor: 2, label: 'Entre 30 minutos y 1 hora' },
      { valor: 3, label: 'Más de 1 hora' }
    ]
  },
  {
    id: 'tiempo_3',
    texto: '¿Cuánto tiempo puedes dedicar al entrenamiento o educación del perro?',
    opciones: [
      { valor: 1, label: 'Menos de 15 minutos' },
      { valor: 2, label: 'Entre 15 y 30 minutos' },
      { valor: 3, label: 'Más de 30 minutos' }
    ]
  },
  {
    id: 'tiempo_4',
    texto: '¿Cuántas horas al día estará el perro solo en casa?',
    opciones: [
      { valor: 3, label: 'Menos de 2 horas' },
      { valor: 2, label: 'Entre 2 y 5 horas' },
      { valor: 1, label: 'Más de 5 horas' }
    ]
  },
  {
    id: 'tiempo_5',
    texto: '¿Qué disponibilidad tienes para actividades al aire libre con tu perro?',
    opciones: [
      { valor: 1, label: 'Solo fines de semana' },
      { valor: 2, label: 'Algunos días entre semana' },
      { valor: 3, label: 'Todos los días' }
    ]
  },

  // Pregunta de experiencia
  {
    id: 'experiencia',
    texto: '¿Tienes experiencia previa cuidando perros?',
    opciones: [
      { valor: 0, label: 'No, sería mi primera vez' },
      { valor: 1, label: 'Sí, ya he tenido o cuidado perros antes' }
    ]
  },

  // Pregunta de apego
  {
    id: 'apego_emocional',
    texto: '¿Qué tan importante es para ti el vínculo emocional con tu mascota?',
    opciones: [
      { valor: 0, label: 'No es algo tan relevante' },
      { valor: 1, label: 'Me gustaría tener un vínculo' },
      { valor: 2, label: 'Es fundamental para mí' }
    ]
  }
]

export default preguntas
