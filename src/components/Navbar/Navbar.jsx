// src/components/Navbar.jsx
import { Link } from 'react-router-dom'
import useAuthStore from '@store/authStore'
import styles from './Navbar.module.css'

const Navbar = () => {
  const { user } = useAuthStore()

  const handleClick = () => {
    if (user?.rol === 'user') {
      alert('Eres un usuario. ¡Bienvenido!')
    }
  }

  return (
    <header className={styles.navbar}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>Home</Link>
        <Link to="/tienda" className={styles.link}>Tienda</Link>
        <Link to="/test" className={styles.link}>Test</Link>

        {/* Botón siempre visible, solo funciona si es usuario logueado */}
        <button
          onClick={handleClick}
          className={styles.link}
          style={{
            cursor: user?.rol === 'user' ? 'pointer' : 'not-allowed',
            opacity: user?.rol === 'user' ? 1 : 0.5
          }}
        >
          Solo para usuarios
        </button>
      </nav>
    </header>
  )
}

export default Navbar
