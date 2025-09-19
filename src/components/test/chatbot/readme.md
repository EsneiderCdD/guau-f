# 🐶 Chatbot - Entrevista de Compatibilidad

Este módulo implementa un **chat UI propio** en React (sin `react-chatbot-kit`), diseñado para realizar entrevistas con usuarios y construir un vector de perfil.  
Cada pregunta es independiente, editable y su estado se guarda de manera centralizada, permitiendo modificar respuestas anteriores sin romper el flujo.

---

## 📂 Estructura de archivos

```
chatbot/
│
├── ChatUI.jsx            # Motor principal del chat
├── ChatbotWrapper.jsx    # Wrapper que conecta el chat con el backend
├── MessageList.jsx       # Renderiza la lista de mensajes (bot, user, preguntas)
├── QuestionBubble.jsx    # Botones de respuesta para cada pregunta
├── Chatbot.module.css    # Estilos del chat (basados en los overrides originales)
├── preguntas.js          # Une todas las preguntas y añade su "dimension"
├── chatbotBridge.js      # Comunicación con el wrapper/externo (igual que antes)
└── README.md             # Este archivo
```

---

## ⚙️ Flujo de conversación

1. El chat inicia con un mensaje de bienvenida:
   ```
   ¡Hola! 👋 Escribe 'empezar' para iniciar la encuesta.
   ```

2. El usuario escribe `"empezar"` → se muestra la primera pregunta.

3. Cada **pregunta** aparece como un mensaje del bot + botones (0 a 4).
   - El usuario selecciona un valor.
   - La respuesta se guarda en `respuestas[questionId]`.
   - **Si es la última pregunta respondida** → aparece la siguiente.
   - **Si es una pregunta anterior ya respondida** → solo actualiza esa respuesta, sin avanzar el flujo.

4. Al llegar al final:
   - El bot muestra:
     ```
     ✅ Has respondido todas las preguntas. Escribe 'listo' para enviar.
     ```
   - El usuario escribe `"listo"` → se calcula el vector final y se notifica a `chatbotBridge`.

---

## 📊 Lógica de resultados

- Las respuestas se agrupan por dimensión: `tiempo`, `experiencia`, `apego`, `motivacion`.
- Se calcula un promedio por dimensión.
- Se construye un **vector de 4 dimensiones** con estos promedios.
- Se calcula un índice global como el promedio de los 4 valores.
- El resultado se envía a `chatbotBridge` → `ChatbotWrapper` → backend.

---

## 🎨 Estilos

- Los estilos provienen de `Chatbot.module.css` y replican los overrides originales de `react-chatbot-kit`.
- Se usan clases como `.botMessage`, `.userMessage`, `.opt`, `.optSelected` para personalizar la UI.
- Al seleccionar una opción de respuesta, esta queda resaltada en verde con un borde y sombra.

---

## 🚀 Extensiones futuras (pensadas pero no implementadas)

- **Notificaciones en tiempo real**: mostrar compatibilidad parcial con perros mientras el usuario responde.
- **Flujos dinámicos**: adaptar las preguntas en función de las respuestas y el vector parcial.
- **Persistencia**: guardar progreso en `localStorage` o base de datos para continuar entrevistas incompletas.
- **Animaciones**: añadir transiciones suaves para mensajes y botones.

---

## ✅ Ventajas de esta migración

- Se evita la rigidez de `react-chatbot-kit`.
- Cada pregunta tiene su propio estado independiente.
- Permite cambiar respuestas pasadas sin romper el flujo.
- Facilita la escalabilidad hacia nuevas lógicas (compatibilidad temprana, decisiones dinámicas).
