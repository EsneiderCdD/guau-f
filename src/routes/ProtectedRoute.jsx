// src/routes/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom'
import useAuthStore from '@store/authStore' // ✅ Import necesario

const ProtectedRoute = ({ children }) => {
  const { user, token } = useAuthStore()

  if (!token) return <Navigate to="/login" replace />

  if (user?.rol !== 'admin') return <Navigate to="/" replace />

  return children
}

export default ProtectedRoute
