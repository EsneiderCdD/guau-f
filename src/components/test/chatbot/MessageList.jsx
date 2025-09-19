// src/components/test/chatbot/MessageList.jsx
import React from "react";
import QuestionBubble from "./QuestionBubble";
import styles from "./Chatbot.module.css";

const MessageList = ({ messages, preguntas, respuestas, onAnswer }) => {
  return (
    <>
      {messages.map((m) => {
        if (m.type === "bot")
          return (
            <div key={m.id} className={styles.botMessageContainer}>
              <div className={styles.botAvatar}></div>
              <div className={styles.botMessage}>{m.text}</div>
            </div>
          );

        if (m.type === "user")
          return (
            <div key={m.id} className={styles.userMessageContainer}>
              <div className={styles.userMessage}>{m.text}</div>
              <div className={styles.userAvatar}></div>
            </div>
          );

        if (m.type === "question")
          return (
            <div key={m.id} className={styles.botMessageContainer}>
              <div className={styles.botAvatar}></div>
              <div>
                <div className={styles.botMessage}>{m.text}</div>
                <QuestionBubble
                  questionId={m.questionId}
                  preguntas={preguntas}
                  selected={respuestas[m.questionId]}
                  onAnswer={onAnswer}
                />
              </div>
            </div>
          );

        return null;
      })}
    </>
  );
};

export default MessageList;
