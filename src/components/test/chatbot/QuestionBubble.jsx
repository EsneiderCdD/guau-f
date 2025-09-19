// src/components/test/chatbot/QuestionBubble.jsx
import React from "react";
import styles from "./Chatbot.module.css";

const opciones = [0, 1, 2, 3, 4];

const QuestionBubble = ({ questionId, preguntas, selected, onAnswer }) => {
  const pregunta = preguntas.find((p) => p.id === questionId);
  if (!pregunta) return null;

  return (
    <div style={{ marginTop: 8 }}>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {opciones.map((opt) => (
          <button
            key={opt}
            className={selected === opt ? styles.optSelected : styles.opt}
            onClick={() => onAnswer(questionId, opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionBubble;
