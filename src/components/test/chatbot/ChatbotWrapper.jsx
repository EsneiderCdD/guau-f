// src/components/test/chatbot/ChatbotWrapper.jsx
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./Config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

const ChatbotWrapper = () => {
  return (
    <div style={{ maxWidth: "400px" }}>
      <Chatbot
        config={config}              // 👈 minúscula
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default ChatbotWrapper;
