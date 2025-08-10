// src/components/test/data/index.js
import tiempo from '@components/test/data/tiempo'
import experiencia from './experiencia'
import apego from './apego'
import greetings from './greetings'
import closings from './closings'

const preguntas = [
  ...tiempo,
  ...experiencia,
  ...apego
].sort((a, b) => (a.orden || 0) - (b.orden || 0))

export default preguntas
export { tiempo, experiencia, apego, greetings, closings }
