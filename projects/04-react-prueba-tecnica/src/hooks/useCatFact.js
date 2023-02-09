import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/getRandomFact'

export function useCatFact() {
  const [fact, setFact] = useState('')

  // Para recuperar la cita al cargar la página
  useEffect(() => {
    getRandomFact().then(setFact)
  }, [])

  const refreshFact = () => getRandomFact().then(setFact)

  return { fact, refreshFact }
}
