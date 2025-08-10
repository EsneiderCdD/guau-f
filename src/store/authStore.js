// src/stores/authStore.js
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: null,

      login: (user, token) => set({ user, token }),
      logout: () => set({ user: null, token: null }),

      isAuthenticated: () => !!get().token
    }),
    {
      name: 'auth-storage', // Nombre de la clave en localStorage
      getStorage: () => localStorage // Puedes cambiarlo por sessionStorage si quieres que se borre al cerrar pestaña
    }
  )
)

export default useAuthStore
