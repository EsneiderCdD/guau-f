// src/pages/AdminPage.jsx
import AdminPanel from '../components/Admin/AdminPanel'
import styles from './AdminPage.module.css'

const AdminPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hola, Admin 👋</h1>
      <AdminPanel />
    </div>
  )
}

export default AdminPage
