import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import PerroCard from '../components/PerroCard/PerroCard'
import { obtenerPerros } from '../services/perrosService'
import styles from './Home.module.css'
const Home = () => {
  const [perros, setPerros] = useState([])

  useEffect(() => {
    obtenerPerros().then(data => setPerros(data))
  }, [])

  return (
    <>
      <Navbar />
      <header className={styles.header}>
        <img src="/Header.png" alt="Header background" className={styles.background} />
        <img src="/Gua-logo.png" alt="Gua Logo" className={styles.logo} />
      </header>
      <div className={styles.wrapper}>
        {perros.map(perro => (
          <PerroCard key={perro.id} perro={perro} />
        ))}
      </div>
    </>
  )
}

export default Home
