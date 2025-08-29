import { motion, AnimatePresence } from "framer-motion"
import styles from "./Modals.module.css"
import LoginForm from "@/components/loginForm/LoginForm"

const ModalLogin = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={styles.modal}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button className={styles.close} onClick={onClose}>
              ✖
            </button>

            {/* Aquí va tu formulario de login */}
            <LoginForm onSuccess={onClose} />
          </motion.div>

          {/* Imagen del perro fija en el fondo */}
          <img
            src="/imagen-modal.webp"
            alt="Perro decorativo"
            className={styles.perro}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ModalLogin
