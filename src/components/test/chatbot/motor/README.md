# Motor de Entrevista

Este módulo define la arquitectura de los motores que controlan el flujo del chatbot.

## Objetivo
Separar la **lógica de flujo** de la **interfaz del chat** (`ChatUI`), permitiendo:
- Implementar flujos lineales o dinámicos (grafo, ponderado, IA).
- Mantener el mismo contrato público (`MotorInterface`).

## Archivos
- **interface.js:** define la interfaz común (contrato).
- **motorBasico.js:** implementación secuencial basada en `next`.
- **motorGrafo.js / motorIA.js:** (futuro) versiones avanzadas.

## Ejemplo de uso
```js
import { MotorBasico } from './motorBasico';
import { preguntas } from '../preguntas';

MotorBasico.iniciar(preguntas);
let actual = MotorBasico.obtenerActual();
