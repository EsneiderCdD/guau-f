import Navbar from "@components/navbar/Navbar";
import styles from "./Test.module.css";
import AdminPanel from "../components/Admin/AdminPanel";
import ChatbotWrapper from "@components/test/chatbot/ChatbotWrapper";

const Test = () => {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <Navbar />
      </div>

      <div style={{ margin: "20px auto", textAlign: "center" }}>
        <ChatbotWrapper />
      </div>

      <AdminPanel tabs={["solicitudes"]} />
    </div>
  );
};

export default Test

