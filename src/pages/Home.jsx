// src/pages/Home.jsx
// import Navbar from '../components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import PerroCard from '../components/PerroCard/PerroCard'
import usePerros from '../hooks/usePerros'
import styles from './Home.module.css'

const Home = () => {
  const { data: perros, isLoading, error } = usePerros()

  return (
    <>

      <header className={styles.header}>
        <img src="/Header.png" alt="Header background" className={styles.background} />
        <img src="/Gua-logo.png" alt="Gua Logo" className={styles.logo} />

        {/* cinco carteles */}
        <Link to="/" >
          <img src="/Cartel.webp" alt="Cartel Inicio" className={`${styles.cartel} ${styles.cartelInicio}`} />
        </Link>
        <Link to="/tienda" >
          <img src="/Cartel.webp" alt="Cartel Tienda" className={`${styles.cartel} ${styles.cartelTienda}`} />
        </Link>
        <Link to="/test" >
          <img src="/Cartel.webp" alt="Cartel Test" className={`${styles.cartel} ${styles.cartelTest}`} />
        </Link>
        <Link to="/login" >
          <img src="/Cartel.webp" alt="Cartel Login" className={`${styles.cartel} ${styles.cartelLogin}`} />
        </Link>
        <Link to="/registro" >
          <img src="/Cartel.webp" alt="Cartel Registro" className={`${styles.cartel} ${styles.cartelRegistro}`} />
        </Link>
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
