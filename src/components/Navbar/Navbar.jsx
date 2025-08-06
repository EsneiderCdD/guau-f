import { Link } from 'react-router-dom'
import useAuthStore from '@store/authStore'
import styles from './Navbar.module.css'
import LoginButton from '../ui/LoginButton'
import LogoutButton from '../ui/LogoutButton'

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

        {user ? <LogoutButton /> : <LoginButton />}
      </nav>
    </header>
  )
}

export default Navbar
