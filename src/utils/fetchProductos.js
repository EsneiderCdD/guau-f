// src/utils/fetchProductos.js
const API_URL = 'http://127.0.0.1:5000/productos'

export const postProducto = async (data, token) => {
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
    throw new Error(error.error || 'Error al agregar producto')
  }
  return await res.json()

  
}
export const getProductos = async () => {
  const res = await fetch(API_URL)
  if (!res.ok) throw new Error('Error al obtener los productos')
  return await res.json()
}

export const deleteProducto = async (id, token) => {
  const res = await fetch(`http://127.0.0.1:5000/productos/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  if (!res.ok) {
    const error = await res.json()
    throw new Error(error.error || 'Error al eliminar producto')
  }
}
