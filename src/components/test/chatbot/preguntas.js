// src/components/test/chatbot/preguntas.js
import { tiempo, experiencia, apego, motivacion } from "../data/usuarios";

const dimensiones = [
  { key: "tiempo", items: tiempo },
  { key: "experiencia", items: experiencia },
  { key: "apego", items: apego },
  { key: "motivacion", items: motivacion },
];

// añadimos propiedad "dimension"
dimensiones.forEach((dim) => {
  dim.items.forEach((q) => (q.dimension = dim.key));
});

export const preguntas = dimensiones.flatMap((d) => d.items);
