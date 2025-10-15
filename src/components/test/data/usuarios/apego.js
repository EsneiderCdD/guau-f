/**
 * @typedef {Object} PreguntaNodo
 * @property {string} id - Identificador único de la pregunta.
 * @property {string} texto - Texto visible que se muestra al usuario.
 * @property {string} dimension - Dimensión o categoría (ej: "apego", "tiempo", etc.).
 * @property {number[]} respuestasPosibles - Escala de valores posibles (Likert 0–4).
 * @property {string|string[]} next - ID(s) de la(s) siguiente(s) pregunta(s) en el flujo.
 * @property {boolean} isStart - Indica si es el nodo inicial del flujo.
 * @property {boolean} isEnd - Indica si es el nodo final del flujo.
 * @property {object} [condiciones] - Reglas opcionales de salto o bifurcación.
 * @property {number} [peso] - Peso o relevancia relativa de la pregunta.
 * @property {string} [grupo] - Subgrupo dentro de la dimensión (para agrupar internamente).
 * @property {number} [orden] - Posición natural dentro de la dimensión.
 * @property {string[]} [tags] - Etiquetas semánticas opcionales.
 * @property {string} [nota] - Campo libre para comentarios o metadatos.
 */

/** @type {PreguntaNodo[]} */
const apego = [
  {
    id: "apego_1",
    texto: "¿Quieres que tu perro duerma contigo o en tu habitación?",
    dimension: "apego",
    respuestasPosibles: [0, 1, 2, 3, 4],
    next: "apego_2",
    isStart: true,
    isEnd: false,
    grupo: "vinculo_directo",
    orden: 1,
  },
  {
    id: "apego_2",
    texto: "¿Te gusta que el perro te acompañe en tus actividades?",
    dimension: "apego",
    respuestasPosibles: [0, 1, 2, 3, 4],
    next: "apego_3",
    isStart: false,
    isEnd: false,
    grupo: "vinculo_directo",
    orden: 2,
  },
  {
    id: "apego_3",
    texto: "¿Disfrutas hablarle o interactuar mucho con un perro?",
    dimension: "apego",
    respuestasPosibles: [0, 1, 2, 3, 4],
    next: "apego_4",
    isStart: false,
    isEnd: false,
    grupo: "interaccion_emocional",
    orden: 3,
  },
  {
    id: "apego_4",
    texto: "¿Le comprarías juguetes o accesorios frecuentemente?",
    dimension: "apego",
    respuestasPosibles: [0, 1, 2, 3, 4],
    next: "apego_5",
    isStart: false,
    isEnd: false,
    grupo: "cuidado_afectivo",
    orden: 4,
  },
  {
    id: "apego_5",
    texto: "¿Te gusta que el perro te siga por la casa?",
    dimension: "apego",
    respuestasPosibles: [0, 1, 2, 3, 4],
    next: "apego_6",
    isStart: false,
    isEnd: false,
    grupo: "vinculo_directo",
    orden: 5,
  },
  {
    id: "apego_6",
    texto: "¿Buscas un perro muy dependiente?",
    dimension: "apego",
    respuestasPosibles: [0, 1, 2, 3, 4],
    next: "apego_7",
    isStart: false,
    isEnd: false,
    grupo: "dependencia",
    orden: 6,
  },
  {
    id: "apego_7",
    texto: "¿Prefieres un perro que te dé independencia?",
    dimension: "apego",
    respuestasPosibles: [0, 1, 2, 3, 4],
    next: "apego_8",
    isStart: false,
    isEnd: false,
    grupo: "autonomia",
    orden: 7,
  },
  {
    id: "apego_8",
    texto: "¿Quieres un perro que se relacione con visitas?",
    dimension: "apego",
    respuestasPosibles: [0, 1, 2, 3, 4],
    next: "apego_9",
    isStart: false,
    isEnd: false,
    grupo: "socializacion",
    orden: 8,
  },
  {
    id: "apego_9",
    texto: "¿Te interesa que tu perro sea tu compañía emocional principal?",
    dimension: "apego",
    respuestasPosibles: [0, 1, 2, 3, 4],
    next: null,
    isStart: false,
    isEnd: true,
    grupo: "interaccion_emocional",
    orden: 9,
  },
];

export default apego;
