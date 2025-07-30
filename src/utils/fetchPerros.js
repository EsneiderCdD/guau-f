const API_URL = 'http://127.0.0.1:5000/perros'

// 🔹 Obtener todos los perros
export const getPerros = async () => {
  const res = await fetch(API_URL)
  if (!res.ok) throw new Error('Error al obtener los perros')
  return await res.json()
}

// 🔹 Obtener un perro por ID
export const getPerroPorId = async (id) => {
  const res = await fetch(`${API_URL}/${id}`)
  if (!res.ok) throw new Error('Perro no encontrado')
  return await res.json()
}

// 🔹 Agregar un nuevo perro
export const postPerro = async (data, token) => {
  const res = await fetch(`${API_URL}/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  })
  if (!res.ok) {
    const error = await res.json()
    throw new Error(error.error || 'Error al agregar perro')
  }
  return await res.json()
}

// 🔹 Eliminar un perro
export const deletePerro = async (id, token) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  if (!res.ok) {
    const error = await res.json()
    throw new Error(error.error || 'Error al eliminar perro')
  }
}
