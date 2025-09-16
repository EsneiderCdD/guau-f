class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lower = message.toLowerCase();

    if (lower.includes("empezar")) {
      this.actionProvider.startSurvey();
    }
    // si quieres mantener saludo extra:
    if (lower.includes("hola") && !lower.includes("empezar")) {
      const msg = "¡Encantado de saludarte! Escribe 'empezar' para iniciar 🚀";
      this.actionProvider.setState((prev) => ({
        ...prev,
        messages: [
          ...prev.messages,
          this.actionProvider.createChatBotMessage(msg),
        ],
      }));
    }
  }
}

export default MessageParser;
