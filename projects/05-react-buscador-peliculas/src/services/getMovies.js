import { mappedMovies } from '../adapters/mappedMovies'

const API_KEY = 'aef58733'

export const getMovies = async (query) => {
  if (!query) return null

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
    const data = await response.json()

    if (data.Response === 'False') return

    return mappedMovies(data.Search)
  } catch (e) {
    throw new Error('Error searching movies')
  }
}
