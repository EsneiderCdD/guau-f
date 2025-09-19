import { useEffect, useState, useRef } from "react"
import Chatbot from "react-chatbot-kit"
import config from "./Config"
import MessageParser from "./MessageParser"
import ActionProvider from "./ActionProvider"
import { setOnChatbotComplete } from "./chatbotBridge.js"
import CompatibilidadResultados from "@components/compatibilidad/CompatibilidadResultados"
import useMatchUsuario from "@hooks/useMatchUsuario"

const ChatbotWrapper = () => {
  const {
    perfil,
    compatibilidad,
    fetchPerfil,
    savePerfil,
    fetchCompatibilidad
  } = useMatchUsuario()

  const [usuarioVector, setUsuarioVector] = useState(null)
  const chatRef = useRef(null)

  // Al montar → intentamos traer perfil ya guardado
  useEffect(() => {
    fetchPerfil()
  }, [])

  // Cuando tengamos perfil en DB → pedimos compatibilidad
  useEffect(() => {
    if (perfil) {
      setUsuarioVector([
        perfil.energia,
        perfil.apego_vinculo,
        perfil.regulacion_emocional,
        perfil.exploracion_libertad
      ])
      fetchCompatibilidad()
    }
  }, [perfil])

  // Callback desde el chatbot → guardamos en back
  useEffect(() => {
    setOnChatbotComplete(async (vector) => {
      try {
        await savePerfil(vector)
        await fetchCompatibilidad()
      } catch (err) {
        console.error("Error guardando perfil:", err)
      }
    })
    return () => setOnChatbotComplete(null)
  }, [])

  return (
    <div>
      {/* Si NO hay perfil → mostramos entrevista */}
      {!perfil && (
        <div ref={chatRef}>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
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
  )
}

export default ChatbotWrapper
