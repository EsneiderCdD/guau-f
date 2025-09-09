// src/pages/Home.jsx
import Navbar from '@/components/Navbar/Navbar'
import PerroCard from '../components/PerroCard/PerroCard'
import usePerros from '../hooks/usePerros'
import styles from './Home.module.css'
import AdminPanel from '../components/Admin/AdminPanel'
const Home = () => {
  const { data: perros, isLoading, error } = usePerros()

  return (
    <>
      <header className={styles.header}>
        <img src="/Header.png" alt="Header background" className={styles.background} />
        <img src="/Gua-logo.png" alt="Gua Logo" className={styles.logo} />
      </header>
      <div className={styles.layout}>
        <Navbar />
      </div>
      <div className={styles.wrapper}>
        {isLoading && <p>Cargando...</p>}
        {error && <p>Error: {error}</p>}
        {perros.map(perro => (
          <PerroCard key={perro.id} perro={perro} />
        ))}
      </div>
      <AdminPanel tabs={['perros']} />

    </>
  )
}

export default Home
