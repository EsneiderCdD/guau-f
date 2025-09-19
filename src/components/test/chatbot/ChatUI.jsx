// src/components/test/chatbot/ChatUI.jsx
import React, { useEffect, useRef, useState } from "react";
import styles from "./Chatbot.module.css";
import MessageList from "./MessageList";
import { callOnChatbotComplete } from "./chatbotBridge";

const ChatUI = ({ preguntas }) => {
  const [messages, setMessages] = useState([]);
  const [respuestas, setRespuestas] = useState({});
  const [preguntaIndex, setPreguntaIndex] = useState(0);
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    setMessages([
      { id: "m-welcome", type: "bot", text: "¡Hola! 👋 Escribe 'empezar' para iniciar la encuesta." },
    ]);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  const pushMessage = (msg) => setMessages((prev) => [...prev, msg]);

  const startSurvey = () => {
    if (!preguntas.length) return;
    const primera = preguntas[0];
    pushMessage({
      id: `q-${primera.id}`,
      type: "question",
      text: primera.texto,
      questionId: primera.id,
    });
    setPreguntaIndex(0);
  };

  const handleUserText = (text) => {
    if (!text) return;
    const trimmed = text.trim();
    pushMessage({ id: `u-${Date.now()}`, type: "user", text: trimmed });

    const lower = trimmed.toLowerCase();
    if (lower === "empezar") startSurvey();
    if (lower === "listo") finishSurvey();
  };

  const handleAnswer = (questionId, value) => {
    setRespuestas((prev) => ({ ...prev, [questionId]: value }));

    const current = preguntas[preguntaIndex];
    if (current && current.id === questionId) {
      const nextIndex = preguntaIndex + 1;
      setPreguntaIndex(nextIndex);

      if (nextIndex < preguntas.length) {
        const siguiente = preguntas[nextIndex];
        pushMessage({
          id: `q-${siguiente.id}`,
          type: "question",
          text: siguiente.texto,
          questionId: siguiente.id,
        });
      } else {
        pushMessage({
          id: `info-finished`,
          type: "bot",
          text: '✅ Has respondido todas las preguntas. Escribe "listo" para enviar.',
        });
      }
    }
  };

  const finishSurvey = () => {
    const porDimension = { tiempo: [], experiencia: [], apego: [], motivacion: [] };
    preguntas.forEach((q) => {
      if (q.dimension && respuestas[q.id] !== undefined) {
        porDimension[q.dimension].push(respuestas[q.id]);
      }
    });

    const avg = (arr) => arr.length ? arr.reduce((a,b) => a+b,0) / arr.length : 0;

    const pTiempo = Number(avg(porDimension.tiempo).toFixed(2));
    const pExp = Number(avg(porDimension.experiencia).toFixed(2));
    const pApego = Number(avg(porDimension.apego).toFixed(2));
    const pMotiv = Number(avg(porDimension.motivacion).toFixed(2));

    const vector = [pTiempo, pExp, pApego, pMotiv];
    const indiceGlobal = Math.round(((pTiempo+pExp+pApego+pMotiv)/4)*100)/100;

    pushMessage({
      id: `final-${Date.now()}`,
      type: "bot",
      text: `🎉 Listo!\nTu vector es [${vector.join(", ")}]\nÍndice global: ${indiceGlobal} / 4`,
    });

    try { callOnChatbotComplete(vector); }
    catch (e) { console.error("Error notificando:", e); }
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatHeader}>Asistente</div>
      <div className={styles.chatMessageContainer} ref={containerRef}>
        <MessageList
          messages={messages}
          preguntas={preguntas}
          respuestas={respuestas}
          onAnswer={handleAnswer}
        />
      </div>
      <div className={styles.chatInputContainer}>
        <input
          ref={inputRef}
          className={styles.chatInput}
          placeholder='Escribe aquí (ej: "empezar", "listo")'
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleUserText(e.target.value);
              e.target.value = "";
            }
          }}
        />
        <button
          className={styles.chatBtnSend}
          onClick={() => {
            const val = inputRef.current?.value || "";
            handleUserText(val);
            if (inputRef.current) inputRef.current.value = "";
          }}
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default ChatUI;
