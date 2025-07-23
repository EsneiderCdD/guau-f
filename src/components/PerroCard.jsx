import { Link } from 'react-router-dom'

const PerroCard = ({ perro }) => (
  <div className="card">
    <img src={perro.imagen} alt={perro.nombre} />
    <h3>{perro.nombre}</h3>
    <p>{perro.raza}</p>
    <Link to={`/perros/${perro.id}`}>Ver más</Link>
  </div>
)

export default PerroCard
