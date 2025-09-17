// src/components/test/chatbot/chatbotBridge.js
let _onComplete = null

export const setOnChatbotComplete = (fn) => {
  _onComplete = typeof fn === 'function' ? fn : null
}

export const callOnChatbotComplete = (payload) => {
  if (typeof _onComplete === 'function') {
    try {
      _onComplete(payload)
    } catch (e) {
      console.error('chatbotBridge callback error:', e)
    }
  }
}
