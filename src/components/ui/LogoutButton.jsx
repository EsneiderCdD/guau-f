import { useNavigate } from 'react-router-dom'
import useAuthStore from '@store/authStore'
import styles from './UiButtons.module.css'

const LogoutButton = () => {
  const logout = useAuthStore((state) => state.logout)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <button className={styles.button} onClick={handleLogout}>
      Cerrar sesión
    </button>
  )
}

export default LogoutButton
