import { useEffect, useState } from 'react'
import { getRandomImage } from '../services/getRandomImage'

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState('')

  // Para recuperar la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    getRandomImage(fact).then(setImageUrl)
  }, [fact])

  return { imageUrl }
}
