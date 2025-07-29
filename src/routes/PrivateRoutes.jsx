// src/routes/PrivateRoutes.jsx
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import AdminPage from '@pages/AdminPage'

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default PrivateRoutes
