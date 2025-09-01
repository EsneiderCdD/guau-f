
import { useState } from 'react'
import EncuestaForm from '@components/test/EncuestaForm'
import Compatibilidad from '@components/test/Compatibilidad'
import Navbar from '@components/navbar/Navbar'
import styles from './Test.module.css'

const Test = () => {
  const [showResults, setShowResults] = useState(false)

  return (
    <>
      <div className={styles.container}>
        <div className={styles.layout}>
          <Navbar />
        </div>
        <EncuestaForm onComplete={() => setShowResults(true)} />
        <Compatibilidad enabled={showResults} />
      </div>
    </>
  )
}

export default Test
