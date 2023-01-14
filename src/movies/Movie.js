import { genres } from '../data/genres';

const Movie = ({ movie }) => {
  const {
    title,
    genre_ids,
    original_language,
    original_title,
    release_date,
    poster_path,
    rating,
    overview,
    backdrop_path,
  } = movie;

  const arrGenre = genre_ids.map((e, i)=>{
    return {id: i, name: genres[e]}
  })

  console.log(title, arrGenre)

  return (
    <li className="movie">
      <img src={'https://image.tmdb.org/t/p/w342' + poster_path} alt={title} />
      <h2> {title}</h2>
      <p>Original title: {original_title}</p>
      <p>was released on {release_date}</p>
      <p>Original language: {original_language}</p>
      <p>Rating: {rating}</p>
      <p>Overview: {overview}</p>
      <ul className="genres-list">
        <h3>Genres</h3>
        {arrGenre.map((genre) => (
          <li key={genre.id} className="movie">
            <p>
              {genre.name} 
            </p>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Movie;
