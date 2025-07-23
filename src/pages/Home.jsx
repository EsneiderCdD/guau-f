import { useEffect, useState } from 'react'
import Header from '../components/Header'
import PerroCard from '../components/PerroCard/PerroCard'
import { obtenerPerros } from '../services/PerrosService'
import styles from './Home.module.css'

const Home = () => {
  const [perros, setPerros] = useState([])

  useEffect(() => {
    obtenerPerros().then(data => setPerros(data))
  }, [])

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        {perros.map(perro => (
          <PerroCard key={perro.id} perro={perro} />
        ))}
      </div>
    </>
  )
}

export default Home
