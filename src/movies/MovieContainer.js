// import { movies } from '../data/movies';
import { useState, useEffect } from 'react';
import Movie from './Movie';
import './movies.css';
const API_KEY = process.env.REACT_APP_API_KEY

const MovieContainer = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=' + API_KEY + '&language=en-US&page=1'
      );
      const data = await response.json();
      const movies = data.results;

      console.log(' fetchMovies', movies);
      setMovies(movies);
    }
    fetchData();
  }, []);

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
