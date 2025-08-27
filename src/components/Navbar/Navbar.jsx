// src/components/Navbar/Navbar.jsx
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img src="/Cartel.webp" alt="Cartel Inicio" className={styles.cartel}/>
        <span className={styles.texto}>Inicio</span>
      </Link>

      <Link to="/tienda">
        <img src="/Cartel.webp" alt="Cartel Tienda" className={styles.cartel}/>
        <span className={styles.texto}>Tienda</span>
      </Link>

      <Link to="/test">
        <img src="/Cartel.webp" alt="Cartel Test" className={styles.cartel}/>
        <span className={styles.texto}>Test</span>
      </Link>

      <Link to="/login">
        <img src="/Cartel.webp" alt="Cartel Login" className={styles.cartel}  />
        <span className={styles.texto}>Login</span>
      </Link>

      <Link to="/registro">
        <img src="/Cartel.webp" alt="Cartel Registro" className={styles.cartel}/>
        <span className={styles.texto}>Registro</span>
      </Link>
    </nav>
  )
}

export default Navbar
