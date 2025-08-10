
import { useState } from 'react'
import EncuestaForm from '@components/test/EncuestaForm'
import Compatibilidad from '@components/test/Compatibilidad'

const Test = () => {
  const [showResults, setShowResults] = useState(false)

  return (
    <>
      <EncuestaForm onComplete={() => setShowResults(true)} />
      <Compatibilidad enabled={showResults} />
    </>
  )
}

export default Test
