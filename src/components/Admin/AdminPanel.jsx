// src/components/admin/AdminPanel.jsx
import { useState } from 'react'
import useAuthStore from '@store/authStore'
import PerrosAdminPanel from './PerrosAdminPanel'
import ProductosAdminPanel from './ProductosAdminPanel'
import SolicitudesAdminPanel from './SolicitudesAdminPanel'
import styles from './AdminPanel.module.css'

const AdminPanel = () => {
  const token = useAuthStore((state) => state.token)
  const [activeTab, setActiveTab] = useState('perros')

  return (
    <div className={styles.container}>
      <h2>Panel de Administración</h2>

      {/* Controles de navegación */}
      <div className={styles.tabs}>
        <button onClick={() => setActiveTab('perros')}>Perros</button>
        <button onClick={() => setActiveTab('productos')}>Productos</button>
        <button onClick={() => setActiveTab('solicitudes')}>Solicitudes</button>
      </div>

      {/* Render condicional de cada sección */}
      {activeTab === 'perros' && <PerrosAdminPanel token={token} />}
      {activeTab === 'productos' && <ProductosAdminPanel token={token} />}
      {activeTab === 'solicitudes' && <SolicitudesAdminPanel token={token} />}
    </div>
  )
}

export default AdminPanel
