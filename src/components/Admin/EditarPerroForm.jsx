import { useState, useEffect } from 'react'
import useAuthStore from '@store/authStore'
import styles from './AdminPanel.module.css'

// Hook de actualización (PUT)
const useActualizarPerro = (token) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const actualizarPerro = async (id, perroData) => {
    setIsLoading(true)
    setError(null)
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/perros/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(perroData)
      })
      if (!res.ok) {
        throw new Error('Error al actualizar perro')
      }
      return await res.json()
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  return { actualizarPerro, isLoading, error }
}

const EditarPerroForm = ({ perro, onPerroActualizado, onCancel }) => {
  const [form, setForm] = useState(perro)
  const token = useAuthStore((state) => state.token)
  const { actualizarPerro, isLoading, error } = useActualizarPerro(token)

  // Mantener el formulario sincronizado si cambia el perro
  useEffect(() => {
    setForm(perro)
  }, [perro])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const perroData = {
        ...form,
        edad: parseInt(form.edad),
        tiempo_requerido: parseInt(form.tiempo_requerido),
        requiere_experiencia: parseInt(form.requiere_experiencia),
        apego_esperado: parseInt(form.apego_esperado)
      }
      await actualizarPerro(perro.id, perroData)
      onPerroActualizado()
    } catch (_) {
      // Error manejado en el hook
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3>Editar perro</h3>

      <input name="nombre" value={form.nombre || ''} onChange={handleChange} placeholder="Nombre" />
      <input name="edad" type="number" value={form.edad || ''} onChange={handleChange} placeholder="Edad" min="0" />
      <input name="raza" value={form.raza || ''} onChange={handleChange} placeholder="Raza" />
      <input name="descripcion" value={form.descripcion || ''} onChange={handleChange} placeholder="Descripción" />
      <input name="imagen_url" value={form.imagen_url || ''} onChange={handleChange} placeholder="URL Imagen" />
      <input name="imagen_card_uno" value={form.imagen_card_uno || ''} onChange={handleChange} placeholder="URL Imagen Card Uno" />
      <input name="imagen_card_dos" value={form.imagen_card_dos || ''} onChange={handleChange} placeholder="URL Imagen Card Dos" />

      <fieldset className={styles.fieldset}>
        <legend>Dimensiones</legend>

        <input
          type="number"
          name="tiempo_requerido"
          value={form.tiempo_requerido || ''}
          onChange={handleChange}
          placeholder="Tiempo requerido (1–3)"
          min="1"
          max="3"
        />
        <input
          type="number"
          name="requiere_experiencia"
          value={form.requiere_experiencia || ''}
          onChange={handleChange}
          placeholder="Requiere experiencia (1–3)"
          min="1"
          max="3"
        />
        <input
          type="number"
          name="apego_esperado"
          value={form.apego_esperado || ''}
          onChange={handleChange}
          placeholder="Apego esperado (1–3)"
          min="1"
          max="3"
        />
      </fieldset>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Guardando...' : 'Guardar cambios'}
        </button>
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
      </div>

      {error && <p className={styles.error}>{error}</p>}
    </form>
  )
}

export default EditarPerroForm
