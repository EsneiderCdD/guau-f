import { useState, useEffect } from 'react'
import useActualizarPerro from '@hooks/useActualizarPerro'
import useAuthStore from '@store/authStore'
import styles from './AdminPanel.module.css'

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
        nombre: form.nombre,
        raza: form.raza,
        edad: parseInt(form.edad),
        descripcion: form.descripcion,
        estado: form.estado || 'disponible',
        imagen_url: form.imagen_url,
        imagen_card_uno: form.imagen_card_uno,
        imagen_card_dos: form.imagen_card_dos,
        // Dimensiones actualizadas con nombres del backend
        energia: parseInt(form.energia),
        apego_vinculo: parseInt(form.apego_vinculo),
        regulacion_emocional: parseInt(form.regulacion_emocional),
        exploracion_libertad: parseInt(form.exploracion_libertad || 0),
        datos_fisicos: form.datos_fisicos || ''
      }

      await actualizarPerro(perro.id, perroData)
      onPerroActualizado()
      onCancel() // Cerramos el formulario automáticamente
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
    name="energia"
    value={form.energia || ''}
    onChange={handleChange}
    placeholder="Energía (0–4)"
    min="0"
    max="4"
  />
  <input
    type="number"
    name="regulacion_emocional"
    value={form.regulacion_emocional || ''}
    onChange={handleChange}
    placeholder="Regulación emocional (0–4)"
    min="0"
    max="4"
  />
  <input
    type="number"
    name="apego_vinculo"
    value={form.apego_vinculo || ''}
    onChange={handleChange}
    placeholder="Apego vinculo (0–4)"
    min="0"
    max="4"
  />
  <input
    type="number"
    name="exploracion_libertad"
    value={form.exploracion_libertad || ''}
    onChange={handleChange}
    placeholder="Exploración libertad (0–4)"
    min="0"
    max="4"
  />
  <input
    type="text"
    name="datos_fisicos"
    value={form.datos_fisicos || ''}
    onChange={handleChange}
    placeholder="Datos físicos (opcional)"
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
