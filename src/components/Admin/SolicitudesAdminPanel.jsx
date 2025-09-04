import SolicitudesPanel from './SolicitudesPanel'

const SolicitudesAdminPanel = ({ token }) => {
  return (
    <div>
      <h3>Solicitudes</h3>
      <SolicitudesPanel token={token} />

    </div>
  )
}

export default SolicitudesAdminPanel
