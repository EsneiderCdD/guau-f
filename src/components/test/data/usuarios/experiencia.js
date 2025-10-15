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
const experiencia = [
  {
    id: "experiencia_1",
    texto: "¿Has tenido perros antes?",
    dimension: "experiencia",
    respuestasPosibles: [0, 1, 2, 3, 4],
    next: "experiencia_2",
    isStart: true,
    isEnd: false,
    grupo: "antecedentes",
    orden: 1,
  },
  {
    id: "experiencia_2",
    texto: "¿Has convivido con más de un perro?",
    dimension: "experiencia",
    respuestasPosibles: [0, 1, 2, 3, 4],
    next: "experiencia_3",
    isStart: false,
    isEnd: false,
    grupo: "antecedentes",
    orden: 2,
  },
  {
    id: "experiencia_3",
    texto: "¿Conoces técnicas básicas de adiestramiento?",
    dimension: "experiencia",
    respuestasPosibles: [0, 1, 2, 3, 4],
    next: "experiencia_4",
    isStart: false,
    isEnd: false,
    grupo: "conocimientos",
    orden: 3,
  },
  {
    id: "experiencia_4",
    texto: "¿Has llevado perros al veterinario por tu cuenta?",
    dimension: "experiencia",
    respuestasPosibles: [0, 1, 2, 3, 4],
    next: "experiencia_5",
    isStart: false,
    isEnd: false,
    grupo: "responsabilidad",
    orden: 4,
  },
  {
    id: "experiencia_5",
    texto: "¿Has tratado con perros con problemas de conducta?",
    dimension: "experiencia",
    respuestasPosibles: [0, 1, 2, 3, 4],
    next: "experiencia_6",
    isStart: false,
    isEnd: false,
    grupo: "manejo_dificil",
    orden: 5,
  },
  {
    id: "experiencia_6",
    texto: "¿Te sientes cómodo con perros grandes?",
    dimension: "experiencia",
    respuestasPosibles: [0, 1, 2, 3, 4],
    next: "experiencia_7",
    isStart: false,
    isEnd: false,
    grupo: "confianza",
    orden: 6,
  },
  {
    id: "experiencia_7",
    texto: "¿Puedes leer lenguaje corporal de perros?",
    dimension: "experiencia",
    respuestasPosibles: [0, 1, 2, 3, 4],
    next: "experiencia_8",
    isStart: false,
    isEnd: false,
    grupo: "conocimientos",
    orden: 7,
  },
  {
    id: "experiencia_8",
    texto: "¿Has participado en actividades con perros (clases, deportes)?",
    dimension: "experiencia",
    respuestasPosibles: [0, 1, 2, 3, 4],
    next: "experiencia_9",
    isStart: false,
    isEnd: false,
    grupo: "participacion",
    orden: 8,
  },
  {
    id: "experiencia_9",
    texto: "¿Sabes identificar signos de malestar o dolor en un perro?",
    dimension: "experiencia",
    respuestasPosibles: [0, 1, 2, 3, 4],
    next: null,
    isStart: false,
    isEnd: true,
    grupo: "observacion",
    orden: 9,
  },
];

export default experiencia;
