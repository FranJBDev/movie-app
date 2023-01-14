import { movies } from '../data/movies';
import { useState, useEffect } from 'react';
import Movie from './Movie';
import './movies.css';

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
          <Movie movie={movie} key={movie.id} />
        ))}
      </ul>
    </div>
  );
};

export default MovieContainer;
