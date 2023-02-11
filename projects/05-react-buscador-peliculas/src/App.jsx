import { useState } from 'react'
import './App.css'

import { Movies } from './components/Movies'
import { SearchForm } from './components/SearchForm'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App() {
  const { query, updateQuery, error } = useSearch()
  const [sort, setSort] = useState(false)

  const handleSort = () => {
    setSort(!sort)
  }

  const { movies, searchMovies, isLoading } = useMovies(query, sort)

  return (
    <div className='container'>
      <h1>Buscador de peliculas</h1>
      <header>
        <SearchForm
          error={error}
          query={query}
          updateQuery={updateQuery}
          searchMovies={searchMovies}
          sort={sort}
          handleSort={handleSort}
        />
        <label className='sort'>
          <span>Sort</span>
          <input type='checkbox' checked={sort} onChange={handleSort} />
        </label>
      </header>
      <main>{isLoading ? <p>CARGANDO...</p> : <Movies movies={movies} />}</main>
    </div>
  )
}

export default App
