// src/utils/fetchAuth.js

const API_URL = 'http://127.0.0.1:5000/auth/login'

export const loginRequest = async ({ nombre, password }) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nombre, password })
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.error || 'Error al iniciar sesión')
  }

  return data
}
