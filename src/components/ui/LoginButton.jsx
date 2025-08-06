import { Link } from 'react-router-dom'
import styles from './UiButtons.module.css'

const LoginButton = () => {
  return (
    <Link to="/login" className={styles.button}>
      Iniciar sesión
    </Link>
  )
}

export default LoginButton
