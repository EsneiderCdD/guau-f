import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PerroDetalle from './pages/PerroDetalle'
import Tienda from './pages/Tienda'
import Test from './pages/Test'
import LoginPage from './pages/LoginPage'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perros/:id" element={<PerroDetalle />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/test" element={<Test />} />

        <Route path="/login" element={<LoginPage />} />

      </Routes>
    </Router>
  )
}

export default App
