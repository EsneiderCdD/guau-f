// src/components/test/chatbot/motor/motorBasico.js
import { MotorInterface } from "./interface.js";

/**
 * Motor básico de entrevista
 * --------------------------
 * Implementación mínima y funcional del contrato `MotorInterface`.
 *
 * Comportamiento:
 * - Flujo secuencial (pregunta a pregunta).
 * - Si un nodo tiene `next`, usa ese id como siguiente salto.
 * - Si `next` es `null` → finaliza.
 * - Si no hay `next`, continúa según el orden original de las preguntas.
 */

export const MotorBasico = (() => {
  /** @type {import('./interface.js').PreguntaNodo[]} */
  let _preguntas = [];
  /** @type {Map<string, import('./interface.js').PreguntaNodo>} */
  let _mapa = new Map();
  /** @type {string|null} */
  let _actualId = null;
  /** @type {Record<string, number>} */
  let _respuestas = {};
  /** @type {boolean} */
  let _terminado = false;

  const _findNextLinear = (idActual) => {
    const index = _preguntas.findIndex((q) => q.id === idActual);
    if (index === -1 || index + 1 >= _preguntas.length) return null;
    return _preguntas[index + 1].id;
  };

  const _updateProgreso = () => {
    const total = _preguntas.length;
    const respondidas = Object.keys(_respuestas).length;
    return total ? respondidas / total : 0;
  };

  const motor = {
    /** Inicializa el motor */
    iniciar(preguntas) {
      _preguntas = preguntas;
      _mapa = new Map(preguntas.map((p) => [p.id, p]));
      const start = preguntas.find((p) => p.isStart) || preguntas[0];
      _actualId = start ? start.id : null;
      _respuestas = {};
      _terminado = false;
    },

    /** Devuelve la pregunta actual */
    obtenerActual() {
      if (!_actualId) return null;
      return _mapa.get(_actualId) || null;
    },

    /** Registra la respuesta y avanza */
    registrarRespuesta(id, valor) {
      _respuestas[id] = valor;

      const nodo = _mapa.get(id);
      if (!nodo) return;

      let siguienteId = null;
      if (typeof nodo.next === "string") siguienteId = nodo.next;
      else if (Array.isArray(nodo.next) && nodo.next.length > 0) siguienteId = nodo.next[0];
      else siguienteId = _findNextLinear(id);

      if (siguienteId === null) {
        _terminado = true;
        _actualId = null;
      } else {
        _actualId = siguienteId;
      }
    },

    /** Devuelve la siguiente pregunta según el estado */
    obtenerSiguiente() {
      if (_terminado) return null;
      return this.obtenerActual();
    },

    /** Salta a un ID específico */
    irA(id) {
      if (_mapa.has(id)) {
        _actualId = id;
      }
    },

    /** Estado actual */
    getEstado() {
      return {
        actual: _actualId,
        respuestas: { ..._respuestas },
        terminado: _terminado,
        progreso: _updateProgreso(),
      };
    },

    /** Finaliza la entrevista y calcula resumen */
    finalizar() {
      const dimensiones = {};
      _preguntas.forEach((p) => {
        if (!dimensiones[p.dimension]) dimensiones[p.dimension] = [];
        if (_respuestas[p.id] !== undefined) {
          dimensiones[p.dimension].push(_respuestas[p.id]);
        }
      });

      const promedio = (arr) =>
        arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;

      const resumen = Object.fromEntries(
        Object.entries(dimensiones).map(([dim, vals]) => [dim, promedio(vals)])
      );

      return resumen;
    },
  };

  // Garantizar que cumple la interfaz (sin TypeScript)
  return Object.assign({}, MotorInterface, motor);
})();
