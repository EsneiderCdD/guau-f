// src/utils/fetchPerros.js

const API_URL = 'http://localhost:3000/perros'

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

/* 🔸 Futuras funciones

// Crear un nuevo perro
export const postPerro = async (nuevoPerro) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(nuevoPerro),
  })
  return await res.json()
}

// Actualizar un perro existente
export const putPerro = async (id, datosActualizados) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datosActualizados),
  })
  return await res.json()
}

// Eliminar un perro
export const deletePerro = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
}
*/
