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
    imagen_url: '',
    tiempo_requerido: '',
    requiere_experiencia: '',
    apego_esperado: '',
    imagen_card_uno: '',
    imagen_card_dos: ''
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
      const perroData = {
        ...form,
        edad: parseInt(form.edad),
        tiempo_requerido: parseInt(form.tiempo_requerido),
        requiere_experiencia: parseInt(form.requiere_experiencia),
        apego_esperado: parseInt(form.apego_esperado)
      }

      await agregarPerro(perroData)
      onPerroAgregado()
      setForm({
        nombre: '',
        edad: '',
        raza: '',
        descripcion: '',
        imagen_url: '',
        imagen_card_uno: '',
        imagen_card_dos: '',
        tiempo_requerido: '',
        requiere_experiencia: '',
        apego_esperado: ''
      })
    } catch (_) {

    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3>Agregar nuevo perro</h3>

      <div className={styles.inputs}>
        <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" />
        <input name="edad" value={form.edad} onChange={handleChange} placeholder="Edad" />
        <input name="raza" value={form.raza} onChange={handleChange} placeholder="Raza" />
      </div>
      <textarea className={styles.textarea} name="descripcion" value={form.descripcion} onChange={handleChange} placeholder="Descripción" rows="3" />

      <div className={styles.containerCards}>
        <div className={styles.cardContainer} >
          <div className={styles.card}>
            {form.imagen_card_uno && (
              <img
                src={form.imagen_card_uno}
                alt="Vista previa imagen uno"
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  objectFit: 'contain'
                }}
              />
            )}



          </div>


          <input
            name="imagen_card_uno"
            value={form.imagen_card_uno}
            onChange={handleChange}
            placeholder="URL Imagen Card Uno"
          />






        </div>





        <div className={styles.cardContainer}>
          <div className={styles.card}>
            {form.imagen_card_dos && (
              <img
                src={form.imagen_card_dos}
                alt="Vista previa imagen dos"
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  objectFit: 'contain'
                }}
              />
            )}
          </div>
          <input
            name="imagen_card_dos"
            value={form.imagen_card_dos}
            onChange={handleChange}
            placeholder="URL Imagen Card Dos"
          />
        </div>
      </div>
      <div>


      </div>

      {/* <fieldset className={styles.fieldset}>
        <legend>Dimensiones</legend>

        <input
          type="number"
          name="tiempo_requerido"
          value={form.tiempo_requerido}
          onChange={handleChange}
          placeholder="Tiempo requerido (1–3)"
          min="1"
          max="3"
        />
        <input
          type="number"
          name="requiere_experiencia"
          value={form.requiere_experiencia}
          onChange={handleChange}
          placeholder="Requiere experiencia (0–1)"
          min="0"
          max="1"
        />
        <input
          type="number"
          name="apego_esperado"
          value={form.apego_esperado}
          onChange={handleChange}
          placeholder="Apego esperado (0–2)"
          min="0"
          max="2"
        />
      </fieldset> */}






      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Agregando...' : 'Agregar'}
      </button>

      {error && <p className={styles.error}>{error}</p>}
    </form>
  )
}

export default AgregarPerroForm
