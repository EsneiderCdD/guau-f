// src/components/test/chatbot/config.js
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [
    createChatBotMessage("¡Hola! 👋 Soy tu asistente. Vamos a responder unas preguntas.")
  ],
  botName: "Asistente",
  state: {
    respuestas: {}
  },
  widgets: []
};

export default config;
