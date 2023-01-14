// big image  https://image.tmdb.org/t/p/original
// thumb https://image.tmdb.org/t/p/w780/

// poster examples
// https://image.tmdb.org/t/p/w92/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg
// https://image.tmdb.org/t/p/w154/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg
// https://image.tmdb.org/t/p/w185/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg
// https://image.tmdb.org/t/p/w342/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg
// https://image.tmdb.org/t/p/w500/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg
// https://image.tmdb.org/t/p/w780/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg
// https://image.tmdb.org/t/p/original/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg

const Movie = ({ movie }) => {
  const { title, year, poster_path, rating, director, overview, backdrop_path } = movie;

  return (
    <li className="movie">
      <img src={'https://image.tmdb.org/t/p/w342' + poster_path} alt={title} />
      <p>
        {title} by {director} was released on {year}
      </p>
      <p>Rating: {rating}</p>
      <p>Overview: {overview}</p>
    </li>
  );
};

export default Movie;
