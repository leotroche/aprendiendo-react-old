export const mappedMovies = (movies) => {
  return movies?.map((movie) => {
    return {
      id: movie.imdbID,
      poster: movie.Poster,
      title: movie.Title,
      type: movie.Type,
      year: movie.Year,
    }
  })
}
