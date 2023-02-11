import { useMemo, useRef, useState } from 'react'
import { getMovies } from '../services/getMovies'

export function useMovies(query, sort) {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const prevSearch = useRef(query)

  const searchMovies = async (newQuery) => {
    if (prevSearch.current === newQuery) return

    try {
      setIsLoading(true)
      const newMovies = await getMovies(newQuery)
      prevSearch.current = newQuery
      setMovies(newMovies)
    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const sortedMovies = useMemo(() => {
    if (!movies) return
    return sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies
  }, [sort, movies])

  return { movies: sortedMovies, searchMovies, isLoading, error }
}
