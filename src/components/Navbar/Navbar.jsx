import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from './Navbar.module.css'
import ModalLogin from '@/components/ui/modal/ModalLogin'
import ModalRegister from '@/components/ui/modal/ModalRegister'

const menuItems = [
  { to: "/", label: "Inicio" },
  { to: "/tienda", label: "Tienda" },
  { to: "/test", label: "Test" },
  { to: "login", label: "Login", isModal: "login" }, 
  { to: "registro", label: "Registro", isModal: "register" }
]

const Navbar = () => {
  const [openLogin, setOpenLogin] = useState(false)
  const [openRegister, setOpenRegister] = useState(false)

  const handleOpenModal = (modalType) => {
    if (modalType === "login") setOpenLogin(true)
    if (modalType === "register") setOpenRegister(true)
  }

  return (
    <>
      <nav className={styles.navbar}>
        {menuItems.map(item => {
          if (item.isModal) {
            return (
              <button
                key={item.label}
                onClick={() => handleOpenModal(item.isModal)}
                className={styles.link}
              >
                <motion.div
                  className={styles.cartelWrapper}
                  initial={{ x: 0 }}
                  animate={{ x: -65 }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                >
                  <img
                    src="/Cartel.webp"
                    alt={`Cartel ${item.label}`}
                    className={styles.cartel}
                  />
                  <motion.span
                    className={styles.texto}
                    initial={{ color: "#000" }}
                    animate={{ color: "#000" }}
                    whileHover={{ color: "#d2a679" }}
                    transition={{ duration: 1 }}
                  >
                    {item.label}
                  </motion.span>
                </motion.div>
              </button>
            )
          }

          return (
            <Link key={item.to} to={item.to} className={styles.link}>
              <motion.div
                className={styles.cartelWrapper}
                initial={{ x: 0 }}
                animate={{ x: -65 }}
                whileHover={{ x: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
              >
                <img
                  src="/Cartel.webp"
                  alt={`Cartel ${item.label}`}
                  className={styles.cartel}
                />
                <motion.span
                  className={styles.texto}
                  initial={{ color: "#000" }}
                  animate={{ color: "#000" }}
                  whileHover={{ color: "#d2a679" }}
                  transition={{ duration: 1 }}
                >
                  {item.label}
                </motion.span>
              </motion.div>
            </Link>
          )
        })}
      </nav>

      {/* Modales */}
      <ModalLogin isOpen={openLogin} onClose={() => setOpenLogin(false)} />
      <ModalRegister isOpen={openRegister} onClose={() => setOpenRegister(false)} />
    </>
  )
}

export default Navbar
