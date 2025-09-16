import { createChatBotMessage } from "react-chatbot-kit";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  // manejar respuesta
  handleAnswer = (id, value) => {
    this.setState((prev) => {
      const respuestas = { ...prev.respuestas, [id]: value };
      const nextIndex = prev.preguntaIndex + 1;

      if (nextIndex < prev.preguntas.length) {
        // siguiente pregunta
        const siguiente = prev.preguntas[nextIndex];
        const msg = this.createChatBotMessage(`${siguiente.texto}`, {
          widget: "opcionesNumericas",
        });
        return {
          ...prev,
          respuestas,
          preguntaIndex: nextIndex,
          messages: [...prev.messages, msg],
        };
      } else {
        // fin → calcular resultado
        const result = this.calcularPerfil(respuestas, prev.preguntas);
        const msg = this.createChatBotMessage(
          `¡Listo! 🎉\nTu vector es [${result.vector.join(
            ", "
          )}]\nÍndice global: ${result.indiceGlobal} / 4`
        );
        return {
          ...prev,
          respuestas,
          preguntaIndex: nextIndex,
          messages: [...prev.messages, msg],
        };
      }
    });
  };

  // cálculo igual a EncuestaForm
  calcularPerfil = (respuestas, preguntas) => {
    const porDimension = {
      tiempo: [],
      experiencia: [],
      apego: [],
      motivacion: [],
    };

    preguntas.forEach((q) => {
      if (q.dimension && respuestas[q.id] !== undefined) {
        porDimension[q.dimension].push(respuestas[q.id]);
      }
    });

    const promedio = (arr) =>
      arr.length > 0 ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;

    const pTiempo = Number(promedio(porDimension.tiempo).toFixed(2));
    const pExp = Number(promedio(porDimension.experiencia).toFixed(2));
    const pApego = Number(promedio(porDimension.apego).toFixed(2));
    const pMotiv = Number(promedio(porDimension.motivacion).toFixed(2));

    const vector = [pTiempo, pExp, pApego, pMotiv];
    const indiceGlobal =
      Math.round(((pTiempo + pExp + pApego + pMotiv) / 4) * 100) / 100;

    return { vector, indiceGlobal };
  };

  // inicia con la primera pregunta
  startSurvey = () => {
    this.setState((prev) => {
      const primera = prev.preguntas[0];
      const msg = this.createChatBotMessage(`${primera.texto}`, {
        widget: "opcionesNumericas",
      });
      return {
        ...prev,
        messages: [...prev.messages, msg],
      };
    });
  };
}

export default ActionProvider;
