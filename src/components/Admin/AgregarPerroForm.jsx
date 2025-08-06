// src/components/Admin/AgregarPerroForm.jsx
import { useState } from 'react'
import useAuthStore from '@store/authStore'
import useAgregarPerro from '@hooks/useAgregarPerro' 
import styles from './AdminPanel.module.css'

const AgregarPerroForm = ({ onPerroAgregado }) => {
  const [form, setForm] = useState({
    nombre: '',
    edad: '',
    raza: '',
    descripcion: '',
    imagen_url: ''
  })

  const token = useAuthStore((state) => state.token)
  const { agregarPerro, isLoading, error } = useAgregarPerro(token)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await agregarPerro(form)
      onPerroAgregado()
      setForm({ nombre: '', edad: '', raza: '', descripcion: '', imagen_url: '' })
    } catch (_) {
      // El error ya se maneja internamente
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3>Agregar nuevo perro</h3>
      <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" />
      <input name="edad" value={form.edad} onChange={handleChange} placeholder="Edad" />
      <input name="raza" value={form.raza} onChange={handleChange} placeholder="Raza" />
      <input name="descripcion" value={form.descripcion} onChange={handleChange} placeholder="Descripción" />
      <input name="imagen_url" value={form.imagen_url} onChange={handleChange} placeholder="URL Imagen" />

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Agregando...' : 'Agregar'}
      </button>

      {error && <p className={styles.error}>{error}</p>}
    </form>
  )
}

export default AgregarPerroForm

