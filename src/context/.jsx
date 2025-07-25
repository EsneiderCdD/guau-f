import { createContext, useContext, useState } from 'react'

// Crear contexto
const AppContext = createContext()

// Hook para usar el contexto
export const useAppContext = () => useContext(AppContext)

// Provider del contexto
export const AppProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null)

  const login = (userData) => {
    setUsuario(userData) // userData: { nombre, rol, etc. }
  }

  const logout = () => {
    setUsuario(null)
  }

  return (
    <AppContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AppContext.Provider>
  )
}
