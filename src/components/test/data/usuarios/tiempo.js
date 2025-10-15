/**
 * @typedef {Object} PreguntaNodo
 * @property {string} id
 * @property {string} texto
 * @property {string} dimension
 * @property {number[]} respuestasPosibles
 * @property {string|string[]} next
 * @property {boolean} isStart
 * @property {boolean} isEnd
 * @property {object} [condiciones]
 * @property {number} [peso]
 * @property {string} [grupo]
 * @property {number} [orden]
 * @property {string[]} [tags]
 * @property {string} [nota]
 */

/** @type {PreguntaNodo[]} */
const tiempo = [
  {
    id: "tiempo_1",
    texto: "¿Cuántas horas pasas en casa diariamente?",
    dimension: "tiempo",
    respuestasPosibles: [0, 1, 2, 3, 4],
    next: "tiempo_2",
    isStart: true,
    isEnd: false,
    grupo: "disponibilidad_general",
    orden: 1,
  },
  {
    id: "tiempo_2",
    texto: "¿Dispones de tiempo para pasear al perro cada día?",
    dimension: "tiempo",
    respuestasPosibles: [0, 1, 2, 3, 4],
    next: "tiempo_3",
    isStart: false,
    isEnd: false,
    grupo: "rutina_diaria",
    orden: 2,
  },
  {
    id: "tiempo_3",
    texto: "¿Cuánto tiempo dedicas al ocio en casa?",
    dimension: "tiempo",
    respuestasPosibles: [0, 1, 2, 3, 4],
    next: "tiempo_4",
    isStart: false,
    isEnd: false,
    grupo: "rutina_diaria",
    orden: 3,
  },
  {
    id: "tiempo_4",
    texto: "¿Puedes ajustar tu agenda por responsabilidades de un perro?",
    dimension: "tiempo",
    respuestasPosibles: [0, 1, 2, 3, 4],
    next: "tiempo_5",
    isStart: false,
    isEnd: false,
    grupo: "flexibilidad",
    orden: 4,
  },
  {
    id: "tiempo_5",
    texto: "¿Trabajas fuera de casa frecuentemente?",
    dimension: "tiempo",
    respuestasPosibles: [0, 1, 2, 3, 4],
    next: "tiempo_6",
    isStart: false,
    isEnd: false,
    grupo: "ocupacion",
    orden: 5,
  },
  {
    id: "tiempo_6",
    texto: "¿Tienes fines de semana libres?",
    dimension: "tiempo",
    respuestasPosibles: [0, 1, 2, 3, 4],
    next: "tiempo_7",
    isStart: false,
    isEnd: false,
    grupo: "tiempo_libre",
    orden: 6,
  },
  {
    id: "tiempo_7",
    texto: "¿Puedes dedicar tiempo al entrenamiento?",
    dimension: "tiempo",
    respuestasPosibles: [0, 1, 2, 3, 4],
    next: "tiempo_8",
    isStart: false,
    isEnd: false,
    grupo: "entrenamiento",
    orden: 7,
  },
  {
    id: "tiempo_8",
    texto: "¿Puedes jugar diariamente al menos 30 minutos?",
    dimension: "tiempo",
    respuestasPosibles: [0, 1, 2, 3, 4],
    next: "tiempo_9",
    isStart: false,
    isEnd: false,
    grupo: "interaccion",
    orden: 8,
  },
  {
    id: "tiempo_9",
    texto: "¿Estás dispuesto a reorganizar tu tiempo por un perro?",
    dimension: "tiempo",
    respuestasPosibles: [0, 1, 2, 3, 4],
    next: null,
    isStart: false,
    isEnd: true,
    grupo: "compromiso",
    orden: 9,
  },
];

export default tiempo;
