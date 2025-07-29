// src/App.jsx
import { BrowserRouter as Router } from 'react-router-dom'
import PublicRoutes from './routes/PublicRoutes'
import PrivateRoutes from './routes/PrivateRoutes'

function App() {
  return (
    <Router>
      <PublicRoutes />
      <PrivateRoutes />
    </Router>
  )
}

export default App
