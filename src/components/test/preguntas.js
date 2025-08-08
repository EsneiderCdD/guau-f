const preguntas = [
  {
    id: 'tiempo_disponible',
    texto: '¿Cuánto tiempo diario puedes dedicar a tu perro?',
    opciones: [
      { valor: 1, label: 'Menos de 1 hora' },
      { valor: 2, label: 'Entre 1 y 3 horas' },
      { valor: 3, label: 'Más de 3 horas' }
    ]
  },
  {
    id: 'experiencia',
    texto: '¿Tienes experiencia previa cuidando perros?',
    opciones: [
      { valor: 0, label: 'No, sería mi primera vez' },
      { valor: 1, label: 'Sí, ya he tenido o cuidado perros antes' }
    ]
  },
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
