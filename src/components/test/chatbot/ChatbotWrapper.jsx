// src/components/test/chatbot/ChatbotWrapper.jsx
import React, { useEffect, useState } from "react";
import ChatUI from "./ChatUI";
import { preguntas } from "./preguntas";
import { setOnChatbotComplete } from "./chatbotBridge";
import useMatchUsuario from "@hooks/useMatchUsuario";
import CompatibilidadResultados from "@components/compatibilidad/CompatibilidadResultados";

const ChatbotWrapper = () => {
  const {
    perfil,
    compatibilidad,
    fetchPerfil,
    savePerfil,
    fetchCompatibilidad
  } = useMatchUsuario();

  const [usuarioVector, setUsuarioVector] = useState(null);

  // traer perfil guardado
  useEffect(() => {
    fetchPerfil();
  }, []);

  // cuando llega perfil, seteamos vector y pedimos compatibilidad
  useEffect(() => {
    if (perfil) {
      setUsuarioVector([
        perfil.energia,
        perfil.apego_vinculo,
        perfil.regulacion_emocional,
        perfil.exploracion_libertad
      ]);
      fetchCompatibilidad();
    }
  }, [perfil]);

  // callback de finalización
  useEffect(() => {
    setOnChatbotComplete(async (vector) => {
      try {
        await savePerfil(vector);
        await fetchCompatibilidad();
      } catch (err) {
        console.error("Error guardando perfil:", err);
      }
    });
    return () => setOnChatbotComplete(null);
  }, [savePerfil, fetchCompatibilidad]);

  return (
    <div>
      {!perfil && (
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <ChatUI preguntas={preguntas} />
        </div>
      )}

      {usuarioVector && compatibilidad && compatibilidad.length > 0 && (
        <div style={{ padding: "10px" }}>
          <CompatibilidadResultados
            usuarioVector={usuarioVector}
            resultados={compatibilidad}
          />
        </div>
      )}
    </div>
  );
};

export default ChatbotWrapper;
