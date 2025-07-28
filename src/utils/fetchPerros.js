// src/utils/fetchPerros.js

const API_URL = 'http://127.0.0.1:5000/perros'

// 🔹 Obtener todos los perros
export const getPerros = async () => {
  try {
    const res = await fetch(API_URL)
    if (!res.ok) throw new Error('Error al obtener los perros')
    return await res.json()
  } catch (error) {
    throw error
  }
}

// 🔹 Obtener un perro por ID
export const getPerroPorId = async (id) => {
  try {
    const res = await fetch(`${API_URL}/${id}`)
    if (!res.ok) throw new Error('Perro no encontrado')
    return await res.json()
  } catch (error) {
    throw error
  }
}
