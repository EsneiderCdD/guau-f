// utils/apiClient.js
const API_BASE_URL = 'http://127.0.0.1:5000'

export const apiClient = async ({
  endpoint,
  method = 'GET',
  token = null,
  body = null
}) => {
  const headers = {
    'Content-Type': 'application/json'
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.error || 'Error en la API')
  }

  return data
}

🧰 Y entonces tus fetch individuales se vuelven súper simples:

// utils/fetchSolicitudes.js
import { apiClient } from './apiClient'

export const enviarSolicitudAdopcion = ({ token, payload }) =>
  apiClient({
    endpoint: '/solicitudes',
    method: 'POST',
    token,
    body: payload
  })
