// src/components/test/chatbot/MessageParser.js
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lower = message.toLowerCase();

    if (lower.includes("hola")) {
      this.actionProvider.saludar();
    }
    // Por ahora no necesitamos lógica compleja, 
    // solo flujo controlado
  }
}

export default MessageParser;
