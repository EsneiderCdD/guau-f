import React from "react";

const opciones = [0, 1, 2, 3, 4];

const QuestionWidget = ({ question, actionProvider }) => {
  if (!question) return null;

  return (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      {opciones.map((opt) => (
        <button
          key={opt}
          style={{
            border: "1px solid #ccc",
            borderRadius: "6px",
            padding: "6px 10px",
            cursor: "pointer",
          }}
          onClick={() => actionProvider.handleAnswer(question.id, opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
};

export default QuestionWidget;
