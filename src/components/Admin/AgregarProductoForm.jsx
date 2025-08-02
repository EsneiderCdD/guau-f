// src/components/Admin/AgregarProductoForm.jsx
import { useState } from 'react'
import useAuthStore from '@store/authStore'
import useAgregarProducto from '@hooks/useAgregarProducto'
import styles from './AdminPanel.module.css'

const AgregarProductoForm = ({ onProductoAgregado }) => {
  const [form, setForm] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    stock: '',
    imagen_url: ''
  })

  const token = useAuthStore((state) => state.token)
  const { agregarProducto, isLoading, error } = useAgregarProducto(token)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // Convertir campos numéricos
      const payload = {
        ...form,
        precio: parseFloat(form.precio),
        stock: parseInt(form.stock, 10)
      }
      await agregarProducto(payload)
      onProductoAgregado?.()
      setForm({ nombre: '', descripcion: '', precio: '', stock: '', imagen_url: '' })
    } catch (_) {
      // Error ya está manejado en el hook
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3>Agregar nuevo producto</h3>
      <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" />
      <input name="descripcion" value={form.descripcion} onChange={handleChange} placeholder="Descripción" />
      <input name="precio" value={form.precio} onChange={handleChange} placeholder="Precio" type="number" step="0.01" />
      <input name="stock" value={form.stock} onChange={handleChange} placeholder="Stock" type="number" />
      <input name="imagen_url" value={form.imagen_url} onChange={handleChange} placeholder="URL Imagen" />

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Agregando...' : 'Agregar'}
      </button>

      {error && <p className={styles.error}>{error}</p>}
    </form>
  )
}

export default AgregarProductoForm
