// src/pages/Home.jsx
// import Navbar from '../components/Navbar/Navbar'

import PerroCard from '../components/PerroCard/PerroCard'
import usePerros from '../hooks/usePerros'
import styles from './Home.module.css'

const Home = () => {
  const { data: perros, isLoading, error } = usePerros()

  return (
    <>
      {/* <Navbar /> */}
      <header className={styles.header}>
        <img src="/Header.png" alt="Header background" className={styles.background} />
        <img src="/Gua-logo.png" alt="Gua Logo" className={styles.logo} />

         {/* Tres carteles */}
          <img src="/Cartel.webp" alt="Cartel 1" className={`${styles.cartel} ${styles.cartel1}`} />
          <img src="/Cartel.webp" alt="Cartel 2" className={`${styles.cartel} ${styles.cartel2}`} />
          <img src="/Cartel.webp" alt="Cartel 3" className={`${styles.cartel} ${styles.cartel3}`} />
      </header>
      <div className={styles.wrapper}>
        {isLoading && <p>Cargando...</p>}
        {error && <p>Error: {error}</p>}
        {perros.map(perro => (
          <PerroCard key={perro.id} perro={perro} />
        ))}
      </div>
    </>
  )
}

export default Home
