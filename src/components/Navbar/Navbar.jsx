// src/components/Navbar/Navbar.jsx
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from './Navbar.module.css'

const menuItems = [
  { to: "/", label: "Inicio" },
  { to: "/tienda", label: "Tienda" },
  { to: "/test", label: "Test" },
  { to: "/login", label: "Login" },
  { to: "/registro", label: "Registro" }
]

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {menuItems.map(item => (
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
      ))}
    </nav>
  )
}

export default Navbar
