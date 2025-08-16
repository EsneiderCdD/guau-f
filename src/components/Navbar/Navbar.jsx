// src/components/Navbar/Navbar.jsx
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img src="/Cartel.webp" alt="Cartel Inicio" className={`${styles.cartel} ${styles.cartelInicio}`} />
      </Link>
      <Link to="/tienda">
        <img src="/Cartel.webp" alt="Cartel Tienda" className={`${styles.cartel} ${styles.cartelTienda}`} />
      </Link>
      <Link to="/test">
        <img src="/Cartel.webp" alt="Cartel Test" className={`${styles.cartel} ${styles.cartelTest}`} />
      </Link>
      <Link to="/login">
        <img src="/Cartel.webp" alt="Cartel Login" className={`${styles.cartel} ${styles.cartelLogin}`} />
      </Link>
      <Link to="/registro">
        <img src="/Cartel.webp" alt="Cartel Registro" className={`${styles.cartel} ${styles.cartelRegistro}`} />
      </Link>
    </nav>
  )
}

export default Navbar
