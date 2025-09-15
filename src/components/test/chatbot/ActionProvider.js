// src/components/test/chatbot/ActionProvider.js
import { createChatBotMessage } from "react-chatbot-kit";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  saludar = () => {
    const msg = this.createChatBotMessage("¡Encantado de saludarte!");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, msg],
    }));
  };

  // Aquí más adelante conectaremos las preguntas de Encuesta
}

export default ActionProvider;
