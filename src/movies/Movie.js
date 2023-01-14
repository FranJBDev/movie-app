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

  return (
    <li className="movie">
      <img src={'https://image.tmdb.org/t/p/w300' + poster_path} alt={title} />
      <h2> {title}</h2>
      <p>Titulo original: {original_title}</p>
      <p>Fecha de realización {release_date}</p>
      <p>Lenguaje original: {original_language}</p>
      {/* <p>Clasificacion: {rating}</p> */}
      <h4>Sinopsis</h4>
      <p>{overview}</p>
      {/* <ul className="genres-list">
        <h3>Genres</h3>
        {arrGenre.map((genre) => (
          <li key={genre.id} className="movie">
            <p>
              {genre.name} 
            </p>
          </li>
        ))}
      </ul> */}
    </li>
  );
};

export default Movie;
