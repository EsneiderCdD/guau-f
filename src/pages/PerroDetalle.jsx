import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { obtenerPerroPorId } from '../services/perrosService'

const PerroDetalle = () => {
  const { id } = useParams()
  const [perro, setPerro] = useState(null)

  useEffect(() => {
    obtenerPerroPorId(id).then(data => setPerro(data))
  }, [id])

  if (!perro) return <p>Cargando...</p>

  return (
    <div>
      <h2>{perro.nombre}</h2>
      <img src={perro.imagen} alt={perro.nombre} />
      <p>Edad: {perro.edad}</p>
      <p>Raza: {perro.raza}</p>
      <p>Descripción: {perro.descripcion}</p>
    </div>
  )
}

export default PerroDetalle
