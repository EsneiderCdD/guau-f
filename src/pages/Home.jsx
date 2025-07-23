import { useEffect, useState } from 'react'
import Header from '../components/Header'
import PerroCard from '../components/PerroCard'
import { obtenerPerros } from '../services/perrosService'

const Home = () => {
  const [perros, setPerros] = useState([])

  useEffect(() => {
    obtenerPerros().then(data => setPerros(data))
  }, [])

  return (
    <>
      <Header />
      <div className="cards-container">
        {perros.map(perro => (
          <PerroCard key={perro.id} perro={perro} />
        ))}
      </div>
    </>
  )
}

export default Home
