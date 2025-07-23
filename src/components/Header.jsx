import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/tienda">Tienda</Link>
      <Link to="/test">Test</Link>
    </nav>
  </header>
)

export default Header
