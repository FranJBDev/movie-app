import { movies } from '../data/movies';
import { useState, useEffect } from 'react';

const fetchMovies = () => {
  return movies;
};

const MovieContainer = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const movies = fetchMovies();
    setMovies(movies);
  }, []);

  console.log(fetchMovies());

  return (
    <div className="movie-container">
      <h2>Movies</h2>
      <ul className="movie-list">
        {movies.map((movie) => (
          <li key={movie.id} className="movie">
            <img src={movie.poster} alt={movie.title} />
            <p>
              {movie.title} by {movie.director} was released on {movie.year}
            </p>
            <p>Rating: {movie.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieContainer;
