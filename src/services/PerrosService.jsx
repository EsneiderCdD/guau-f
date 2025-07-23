import axios from 'axios'

const API_URL = 'http://localhost:3000/perros' // Simulando tu backend local

export const obtenerPerros = async () => {
  const res = await axios.get(API_URL)
  return res.data
}

export const obtenerPerroPorId = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`)
  return res.data
}
