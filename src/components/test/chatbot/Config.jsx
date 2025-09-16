import { createChatBotMessage } from "react-chatbot-kit";
import QuestionWidget from "./QuestionWidget";
import { tiempo, experiencia, apego, motivacion } from "../data/usuarios";

// Armamos las dimensiones con referencia de dimensión
const dimensiones = [
  { key: "tiempo", items: tiempo },
  { key: "experiencia", items: experiencia },
  { key: "apego", items: apego },
  { key: "motivacion", items: motivacion },
];
const preguntas = dimensiones.flatMap((d) => d.items);

// añadimos la clave "dimension" a cada pregunta
dimensiones.forEach((dim) => {
  dim.items.forEach((q) => (q.dimension = dim.key));
});

const config = {
  initialMessages: [
    createChatBotMessage("¡Hola! 👋 Escribe 'empezar' para iniciar la encuesta."),
  ],
  botName: "Asistente",
  state: {
    respuestas: {},
    preguntaIndex: 0,
    preguntas,
  },
  widgets: [
    {
      widgetName: "opcionesNumericas",
      widgetFunc: (props) => (
        <QuestionWidget
          {...props}
          question={props.state.preguntas[props.state.preguntaIndex]}
        />
      ),
    },
  ],
};

export default config;
