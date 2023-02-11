function ListOfMovies({ movies }) {
  return (
    <ul className='movie'>
      {movies.map(({ id, title, year, poster }) => {
        return (
          <li key={id}>
            <div>
              <h3>{title}</h3>
              <p>{year}</p>
            </div>
            <img src={poster} alt={title || id} />
          </li>
        )
      })}
    </ul>
  )
}

function NoMoviesResponse() {
  return <p>No se encontraron peliculas para esta búsqueda</p>
}

export function Movies({ movies }) {
  // const hasMovies = movies.length > 0

  return (
    <section>
      <div>{movies ? <ListOfMovies movies={movies} /> : <NoMoviesResponse />}</div>
    </section>
  )
}
