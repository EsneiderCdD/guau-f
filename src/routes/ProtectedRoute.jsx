// src/routes/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom'
import useAuthStore from '@store/authStore'

const ProtectedRoute = ({ children }) => {
  const isAuth = useAuthStore((state) => state.isAuthenticated())

  return isAuth ? children : <Navigate to="/login" replace />
}

export default ProtectedRoute
