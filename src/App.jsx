// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import PerroDetalle from './pages/PerroDetalle'
import Tienda from './pages/Tienda'
import Test from './pages/Test'
import LoginPage from './pages/LoginPage'
import AdminPage from './pages/AdminPage'
import useAuthStore from '@store/authStore' 

function App() {
  const isAuth = useAuthStore((state) => state.isAuthenticated())

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perros/:id" element={<PerroDetalle />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/test" element={<Test />} />
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/admin"
          element={
            isAuth ? <AdminPage /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </Router>
  )
}

export default App
