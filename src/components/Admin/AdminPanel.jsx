// src/components/admin/AdminPanel.jsx
import { useState } from 'react'
import useAuthStore from '@store/authStore'
import PerrosAdminPanel from './PerrosAdminPanel'
import ProductosAdminPanel from './ProductosAdminPanel'
import SolicitudesAdminPanel from './SolicitudesAdminPanel'
import styles from './AdminPanel.module.css'

const AdminPanel = ({ tabs = [] }) => {
  const token = useAuthStore((state) => state.token)
  const [activeTab, setActiveTab] = useState(tabs[0]) // arrancamos con la primera pestaña que venga en props

  return (
    <div className={styles.container}>
      <h2>Panel de Administración</h2>

      {/* Controles de navegación dinámicos */}
      <div className={styles.tabs}>
        {tabs.includes('perros') && (
          <button onClick={() => setActiveTab('perros')}>Perros</button>
        )}
        {tabs.includes('productos') && (
          <button onClick={() => setActiveTab('productos')}>Productos</button>
        )}
        {tabs.includes('solicitudes') && (
          <button onClick={() => setActiveTab('solicitudes')}>Solicitudes</button>
        )}
        {tabs.includes('test-perros') && (
          
          <button onClick={() => setActiveTab('test-perros')}>Test Perros</button>
        )}
      </div>

      {/* Render condicional */}
      {activeTab === 'perros' && <PerrosAdminPanel token={token} />}
      {activeTab === 'productos' && <ProductosAdminPanel token={token} />}
      {activeTab === 'solicitudes' && <SolicitudesAdminPanel token={token} />}
      {activeTab === 'test-perros' && <PerrosAdminPanel token={token} />}
    </div>
  )
}

export default AdminPanel
