import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from './Navbar.module.css'
import ModalLogin from '@/components/ui/modal/ModalLogin'

const menuItems = [
  { to: "/", label: "Inicio" },
  { to: "/tienda", label: "Tienda" },
  { to: "/test", label: "Test" },
  { to: "login", label: "Login", isModal: true }, // 👈 indicamos que es modal
  { to: "/registro", label: "Registro" }
]

const Navbar = () => {
  const [openLogin, setOpenLogin] = useState(false)

  return (
    <>
      <nav className={styles.navbar}>
        {menuItems.map(item => {
          // Si el item es modal (login)
          if (item.isModal) {
            return (
              <button
                key={item.label}
                onClick={() => setOpenLogin(true)}
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

          // Los demás siguen siendo <Link>
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

      {/* Modal login */}
      <ModalLogin isOpen={openLogin} onClose={() => setOpenLogin(false)} />
    </>
  )
}

export default Navbar
