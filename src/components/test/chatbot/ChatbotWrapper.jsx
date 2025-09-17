// src/components/test/chatbot/ChatbotWrapper.jsx
import React, { useEffect, useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./Config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import { setOnChatbotComplete } from "./chatbotBridge";
import CompatibilidadResultados from "@components/compatibilidad/CompatibilidadResultados"; // ruta con alias; ajústala si no usas alias

const ChatbotWrapper = () => {
  const [usuarioVector, setUsuarioVector] = useState(null);

  useEffect(() => {
    // Registrar callback que recibe el vector cuando el chatbot termina
    setOnChatbotComplete((vector) => {
      // vector esperado: [n1, n2, n3, n4]
      setUsuarioVector(Array.isArray(vector) ? vector.map(Number) : null);
    });

    // cleanup al desmontar
    return () => setOnChatbotComplete(null);
  }, []);

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />

      {/* Aquí se muestra compatibilidad después de que el chatbot entregue el vector */}
      {usuarioVector && (
        <div style={{ marginTop: 18 }}>
          <CompatibilidadResultados usuarioVector={usuarioVector} />
        </div>
      )}
    </div>
  );
};

export default ChatbotWrapper;
