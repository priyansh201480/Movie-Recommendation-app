import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../api";
import "./MovieDetails.css";

const MovieDetails = () => {
  const { imdbID } = useParams(); // Get movie ID from URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await getMovieDetails(imdbID);
      setMovie(data);
    };
    fetchDetails();
  }, [imdbID]);

  if (!movie) return <h2>Loading...</h2>;

  return (
    <div className="movie-detail">
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
    </div>
  );
};

export default MovieDetails;
