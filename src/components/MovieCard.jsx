import { Link } from "react-router-dom";
import FavouriteButton from "./FavouriteButton";
import "../components/MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.imdbID}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img src={movie.Poster} alt={movie.Title} />
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </Link>
      <FavouriteButton movie={movie} />
    </div>
  );
};

export default MovieCard;
