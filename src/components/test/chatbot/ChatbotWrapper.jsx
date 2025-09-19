// src/components/test/chatbot/ChatbotWrapper.jsx
import { useEffect, useState, useRef } from "react";
import { setOnChatbotComplete } from "./chatbotBridge.js";
import useMatchUsuario from "@hooks/useMatchUsuario";
import CompatibilidadResultados from "@components/compatibilidad/CompatibilidadResultados";
import ChatUI from "./ChatUI";
import { preguntas } from "./preguntas";

const ChatbotWrapper = () => {
  const {
    perfil,
    compatibilidad,
    fetchPerfil,
    savePerfil,
    fetchCompatibilidad,
  } = useMatchUsuario();

  const [usuarioVector, setUsuarioVector] = useState(null);
  const chatRef = useRef(null);

  // Al montar → intentamos traer perfil ya guardado
  useEffect(() => {
    fetchPerfil();
  }, []);

  // Cuando tengamos perfil en DB → pedimos compatibilidad
  useEffect(() => {
    if (perfil) {
      // Backend devuelve propiedades sueltas, no un array
      setUsuarioVector([
        perfil.energia,
        perfil.apego_vinculo,
        perfil.regulacion_emocional,
        perfil.exploracion_libertad,
      ]);
      fetchCompatibilidad();
    }
  }, [perfil]);

  // Callback desde el chatbot → guardamos en back
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
      {/* Si NO hay perfil → mostramos entrevista */}
      {!perfil && (
        <div ref={chatRef}>
          <ChatUI preguntas={preguntas} />
        </div>
      )}

      {/* Si hay vector y compatibilidad → mostramos resultados */}
      {usuarioVector && compatibilidad.length > 0 && (
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
