import { useContext } from "react";
import FavouriteContext from "../context/FavouriteContext"; //
import "../App";

const FavouriteButton = ({ movie }) => {
  const { favourites, addFavourite, removeFavourite } = useContext(FavouriteContext);

  const isFavourite = favourites.some((fav) => fav.imdbID === movie.imdbID);

  return (
    
    <button
      className={`favourite-button ${isFavourite ? "remove" : ""}`}
      onClick={() => isFavourite ? removeFavourite(movie.imdbID) : addFavourite(movie)}>
      {isFavourite ? "Remove from Favourites" : "Add to Favourites"}
    </button>
  );
};

export default FavouriteButton;
