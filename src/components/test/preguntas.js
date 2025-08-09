const preguntas = [
  // 🕒 DIMENSIÓN 1: TIEMPO (Likert 1–3)
  {
    id: 'tiempo_1',
    texto: '¿Cuántas horas al día pasas en casa normalmente?',
    opciones: [
      { valor: 1, label: 'Menos de 1 hora' },
      { valor: 2, label: 'Entre 1 y 3 horas' },
      { valor: 3, label: 'Más de 3 horas' }
    ]
  },
  {
    id: 'tiempo_2',
    texto: '¿Podrías sacar a pasear a tu perro todos los días?',
    opciones: [
      { valor: 1, label: 'Rara vez' },
      { valor: 2, label: 'A veces' },
      { valor: 3, label: 'Siempre' }
    ]
  },
  {
    id: 'tiempo_3',
    texto: '¿Cuánto tiempo diario podrías dedicar a jugar con tu perro?',
    opciones: [
      { valor: 1, label: 'Menos de 30 minutos' },
      { valor: 2, label: '30-60 minutos' },
      { valor: 3, label: 'Más de 1 hora' }
    ]
  },
  {
    id: 'tiempo_4',
    texto: '¿Con qué frecuencia trabajas fuera de casa?',
    opciones: [
      { valor: 3, label: 'Rara vez o nunca' },
      { valor: 2, label: 'Algunos días' },
      { valor: 1, label: 'Todos los días' }
    ]
  },
  {
    id: 'tiempo_5',
    texto: '¿Podrías ajustar tu agenda para atender a tu perro?',
    opciones: [
      { valor: 1, label: 'No, mi agenda es fija' },
      { valor: 2, label: 'En parte' },
      { valor: 3, label: 'Sí, sin problema' }
    ]
  },

  // 🐾 DIMENSIÓN 2: EXPERIENCIA (Binaria 0–1)
  {
    id: 'experiencia_1',
    texto: '¿Has tenido perros antes?',
    opciones: [
      { valor: 0, label: 'No' },
      { valor: 1, label: 'Sí' }
    ]
  },
  {
    id: 'experiencia_2',
    texto: '¿Conoces técnicas básicas de adiestramiento?',
    opciones: [
      { valor: 0, label: 'No' },
      { valor: 1, label: 'Sí' }
    ]
  },
  {
    id: 'experiencia_3',
    texto: '¿Te sientes cómodo manejando perros grandes?',
    opciones: [
      { valor: 0, label: 'No' },
      { valor: 1, label: 'Sí' }
    ]
  },
  {
    id: 'experiencia_4',
    texto: '¿Has llevado a un perro al veterinario por tu cuenta?',
    opciones: [
      { valor: 0, label: 'No' },
      { valor: 1, label: 'Sí' }
    ]
  },
  {
    id: 'experiencia_5',
    texto: '¿Podrías enseñar trucos o comandos a un perro?',
    opciones: [
      { valor: 0, label: 'No' },
      { valor: 1, label: 'Sí' }
    ]
  },

  // ❤️ DIMENSIÓN 3: APEGO (Likert 1–3)
  {
    id: 'apego_1',
    texto: '¿Te gustaría dormir con tu perro o que esté en tu habitación?',
    opciones: [
      { valor: 1, label: 'No' },
      { valor: 2, label: 'A veces' },
      { valor: 3, label: 'Siempre' }
    ]
  },
  {
    id: 'apego_2',
    texto: '¿Qué tan importante es que tu perro te acompañe en actividades diarias?',
    opciones: [
      { valor: 1, label: 'Nada importante' },
      { valor: 2, label: 'Algo importante' },
      { valor: 3, label: 'Muy importante' }
    ]
  },
  {
    id: 'apego_3',
    texto: '¿Te gustaría que tu perro te siga por la casa?',
    opciones: [
      { valor: 1, label: 'No, prefiero que esté independiente' },
      { valor: 2, label: 'A veces está bien' },
      { valor: 3, label: 'Sí, me encanta' }
    ]
  },
  {
    id: 'apego_4',
    texto: '¿Le comprarías juguetes y accesorios con frecuencia?',
    opciones: [
      { valor: 1, label: 'Rara vez' },
      { valor: 2, label: 'A veces' },
      { valor: 3, label: 'Sí, siempre que pueda' }
    ]
  },
  {
    id: 'apego_5',
    texto: '¿Te ves hablando o interactuando mucho con tu perro?',
    opciones: [
      { valor: 1, label: 'No mucho' },
      { valor: 2, label: 'A veces' },
      { valor: 3, label: 'Sí, todo el tiempo' }
    ]
  }
]

export default preguntas
