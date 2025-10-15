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
const motivacion = [
  {
    id: "motivacion_1",
    texto: "¿Por qué deseas adoptar un perro? (compañía, seguridad, etc.)",
    dimension: "motivacion",
    respuestasPosibles: [0, 1, 2, 3, 4],
    next: "motivacion_2",
    isStart: true,
    isEnd: false,
    grupo: "razones_principales",
    orden: 1,
  },
  {
    id: "motivacion_2",
    texto: "¿Quieres un perro activo para deportes?",
    dimension: "motivacion",
    respuestasPosibles: [0, 1, 2, 3, 4],
    next: "motivacion_3",
    isStart: false,
    isEnd: false,
    grupo: "actividad_fisica",
    orden: 2,
  },
  {
    id: "motivacion_3",
    texto: "¿Te interesa más un perro tranquilo de compañía?",
    dimension: "motivacion",
    respuestasPosibles: [0, 1, 2, 3, 4],
    next: "motivacion_4",
    isStart: false,
    isEnd: false,
    grupo: "estilo_vida",
    orden: 3,
  },
  {
    id: "motivacion_4",
    texto: "¿Buscas un perro como parte de tu familia?",
    dimension: "motivacion",
    respuestasPosibles: [0, 1, 2, 3, 4],
    next: "motivacion_5",
    isStart: false,
    isEnd: false,
    grupo: "valores_familiares",
    orden: 4,
  },
  {
    id: "motivacion_5",
    texto: "¿Adoptarías un perro con necesidades especiales?",
    dimension: "motivacion",
    respuestasPosibles: [0, 1, 2, 3, 4],
    next: "motivacion_6",
    isStart: false,
    isEnd: false,
    grupo: "compromiso",
    orden: 5,
  },
  {
    id: "motivacion_6",
    texto: "¿Prefieres un perro que te motive a salir de casa?",
    dimension: "motivacion",
    respuestasPosibles: [0, 1, 2, 3, 4],
    next: "motivacion_7",
    isStart: false,
    isEnd: false,
    grupo: "actividad_social",
    orden: 6,
  },
  {
    id: "motivacion_7",
    texto: "¿Quieres un perro como apoyo emocional?",
    dimension: "motivacion",
    respuestasPosibles: [0, 1, 2, 3, 4],
    next: "motivacion_8",
    isStart: false,
    isEnd: false,
    grupo: "apoyo_emocional",
    orden: 7,
  },
  {
    id: "motivacion_8",
    texto: "¿El aspecto físico del perro es un factor clave?",
    dimension: "motivacion",
    respuestasPosibles: [0, 1, 2, 3, 4],
    next: "motivacion_9",
    isStart: false,
    isEnd: false,
    grupo: "criterios_esteticos",
    orden: 8,
  },
  {
    id: "motivacion_9",
    texto: "¿Adoptarías a largo plazo sin importar dificultades?",
    dimension: "motivacion",
    respuestasPosibles: [0, 1, 2, 3, 4],
    next: null,
    isStart: false,
    isEnd: true,
    grupo: "compromiso",
    orden: 9,
  },
];

export default motivacion;
