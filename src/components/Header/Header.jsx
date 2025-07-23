import styles from './Header.module.css'

const Header = () => (
  <header className={styles.header}>
    <img src="/Header.png" alt="Header background" className={styles.background} />
    <img src="/Gua-logo.png" alt="Gua Logo" className={styles.logo} />
  </header>
)

export default Header
