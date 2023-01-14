// import { movies } from '../data/movies';
import { useState, useEffect } from 'react';
import Movie from './Movie';
import './movies.css';
import Pagination from './Pagination';

const API_KEY = process.env.REACT_APP_API_KEY;

const MovieContainer = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totPages, setTotPages] = useState(1);

  const config = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/configuration?api_key=' + API_KEY
    );
    const data = await response.json();
    console.log(' config', data);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=' +
          API_KEY +
          '&language=es-MX&page=' +
          currentPage
      );
      const data = await response.json();
      const movies = data.results;
      setTotPages(data.total_pages);

      console.log(' fetchMovies', data);
      setMovies(movies);
    }
    fetchData();
    // config()
  }, [currentPage]);

  return (
    <div className="movie-container">
      <h2>Ultimas peliculas </h2>
      <p>Pagina actual {currentPage}</p>
      <Pagination
          currentPage={currentPage}
          totalCount={totPages}
          onPageChange={(page) => setCurrentPage(page)}
        />

      <div className="movie-list">
        {movies.map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieContainer;
