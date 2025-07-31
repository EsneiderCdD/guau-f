const API_URL = 'http://127.0.0.1:5000/solicitudes/adoptar'

export const enviarSolicitudAdopcion = async (solicitud, token) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(solicitud)
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.error || 'No se pudo enviar la solicitud')
  }

  return data
}
