import { useEffect, useState, useRef } from 'react'

export function useSearch() {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current && query === '') {
      isFirstInput.current = query === ''
      return
    }

    if (query.startsWith(' ')) {
      return setError('La búsqueda no puede iniciar por un espacio')
    }

    if (query === '') {
      return setError('No se puede buscar una película vacía')
    }

    if (query.length < 3) {
      return setError('La búsqueda debe tener al menos 3 caracteres')
    }

    setError(null)
  }, [query])

  const updateQuery = (query) => {
    setQuery(query)
  }

  return { query, updateQuery, error }
}
