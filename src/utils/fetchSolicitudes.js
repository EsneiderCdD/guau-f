const API_URL = 'http://127.0.0.1:5000/solicitudes'

export const fetchSolicitudes = async (token) => {
  const res = await fetch(`${API_URL}/`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  if (!res.ok) {
    const data = await res.json()
    throw new Error(data.error || 'No se pudieron obtener las solicitudes')
  }

  return res.json()
}

export const deleteSolicitud = async (id, token) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  if (!res.ok) {
    const data = await res.json()
    throw new Error(data.error || 'No se pudo eliminar la solicitud')
  }
}

export const enviarSolicitudAdopcion = async (formData, token) => {
  const res = await fetch(`${API_URL}/adoptar`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(formData)
  })

  if (!res.ok) {
    const errorData = await res.json()
    throw new Error(errorData.error || 'Error al enviar la solicitud')
  }

  return await res.json()
}
