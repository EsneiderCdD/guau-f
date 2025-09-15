import { useState } from 'react'
import EncuestaForm from '@components/test/EncuestaForm'
import Compatibilidad from '@components/test/Compatibilidad'
import Navbar from '@components/navbar/Navbar'
import styles from './Test.module.css'
import PerroEncuesta from '../components/test/PerroEncuesta'
import AdminPanel from '../components/Admin/AdminPanel'
import ChatbotWrapper from '@components/test/chatbot/ChatbotWrapper'   

const Test = () => {
  const [perfilUsuario, setPerfilUsuario] = useState(null)
  const [perfilPerro, setPerfilPerro] = useState(null)

  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <Navbar />
      </div>

      {/* 🔹 chatbot agregado */}
      <div style={{ margin: "20px auto", textAlign: "center" }}>
        <ChatbotWrapper />
      </div>

      <EncuestaForm onComplete={(res) => setPerfilUsuario(res.vector)} />
      {/* <PerroEncuesta onFinish={(res) => setPerfilPerro(res.vector)} /> */}

      <Compatibilidad perfilUsuario={perfilUsuario} perfilPerro={perfilPerro} />
      
      <AdminPanel tabs={['solicitudes']} />
   </div>
  )
}

export default Test

