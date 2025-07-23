import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => (
  <header className={styles.navbar}>
    <nav className={styles.nav}>
      <Link to="/" className={styles.link}>Home</Link>
      <Link to="/tienda" className={styles.link}>Tienda</Link>
      <Link to="/test" className={styles.link}>Test</Link>
    </nav>
  </header>
)

export default Navbar
