import { useCallback } from 'react'
import debounce from 'just-debounce-it'

export function SearchForm({ query, updateQuery, error, searchMovies }) {
  const handleSubmit = (evt) => {
    evt.preventDefault()
    if (error) return
    searchMovies()
  }

  const debouncedGetMovies = useCallback(
    debounce((search) => {
      console.log('search', search)
      searchMovies(search)
    }, 300),
    []
  )

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateQuery(newSearch)
    debouncedGetMovies(newSearch)
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          style={{
            border: '1px solid transparent',
            borderColor: error ? 'red' : 'transparent',
          }}
          onChange={handleChange}
          value={query}
          name='query'
          type='text'
          placeholder='Advengers, Star Wars, The Matrix...'
        />

        <button>Buscar</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </section>
  )
}
