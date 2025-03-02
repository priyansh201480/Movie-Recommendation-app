import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "./Favourites.css";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const savedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(savedFavourites);
  }, []);

  const removeFromFavourites = (movieId) => {
    const updatedFavourites = favourites.filter((movie) => movie.imdbID !== movieId);
    setFavourites(updatedFavourites);
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  return (
    <div className="favourites-container">
      <h2>Your Favourite Movies</h2>
      {favourites.length === 0 ? (
        <p>No favourite movies added yet.</p>
      ) : (
        <div className="movie-list">
          {favourites.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} removeFromFavourites={removeFromFavourites} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;
