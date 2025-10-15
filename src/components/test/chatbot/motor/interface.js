// src/components/test/chatbot/motor/interface.js

/**
 * @typedef {Object} PreguntaNodo
 * @property {string} id - Identificador único de la pregunta.
 * @property {string} texto - Texto o enunciado mostrado al usuario.
 * @property {string} dimension - Dimensión asociada (tiempo, apego, etc.).
 * @property {string|string[]|null} [next] - ID(s) de la siguiente pregunta o null si es el final.
 * @property {boolean} [isStart] - Indica si esta es la primera pregunta del flujo.
 * @property {Array<number>} [respuestasPosibles] - Escala de valores válidos.
 * @property {string} [ayuda] - Texto opcional de ayuda o contexto adicional.
 */

/**
 * @typedef {Object} EstadoMotor
 * @property {string|null} actual - ID de la pregunta actual.
 * @property {Record<string, number>} respuestas - Mapa id→valor con las respuestas del usuario.
 * @property {boolean} terminado - Si el flujo llegó al final.
 * @property {number} progreso - Porcentaje de avance (0–1).
 */

/**
 * Interfaz del Motor de Entrevista
 * --------------------------------
 * Define las funciones públicas que debe implementar cualquier motor
 * que controle el flujo de preguntas dentro del chatbot.
 *
 * Esta interfaz **no contiene lógica**, solo la estructura y los tipos esperados.
 * ChatUI podrá comunicarse con cualquier implementación (básica, grafo, IA, etc.)
 * siempre que respete este contrato.
 */

/**
 * @interface MotorEntrevista
 */
export const MotorInterface = {
  /**
   * Inicializa el motor con una lista de preguntas.
   * @param {PreguntaNodo[]} preguntas - Lista completa de nodos/preguntas.
   * @returns {void}
   */
  iniciar(preguntas) {},

  /**
   * Retorna la pregunta actual del flujo.
   * @returns {PreguntaNodo|null} - Nodo actual o null si terminó.
   */
  obtenerActual() { return null; },

  /**
   * Registra la respuesta de una pregunta.
   * @param {string} id - ID de la pregunta.
   * @param {number} valor - Valor seleccionado (0–4).
   * @returns {void}
   */
  registrarRespuesta(id, valor) {},

  /**
   * Obtiene el siguiente nodo según la lógica del motor.
   * @returns {PreguntaNodo|null} - Nodo siguiente o null si finalizó.
   */
  obtenerSiguiente() { return null; },

  /**
   * Fuerza un salto directo a una pregunta por ID.
   * @param {string} id - ID de destino.
   * @returns {void}
   */
  irA(id) {},

  /**
   * Retorna el estado actual del motor (respuestas, progreso, etc.).
   * @returns {EstadoMotor}
   */
  getEstado() { return { actual: null, respuestas: {}, terminado: false, progreso: 0 }; },

  /**
   * Finaliza la entrevista y devuelve los resultados agregados.
   * @returns {object} - Vector final o resumen de dimensiones.
   */
  finalizar() { return {}; },
};
