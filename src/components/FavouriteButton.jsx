import { useEffect, useState } from "react";
import "../components/FavouriteButton.css";

const FavouriteButton = ({ movie }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const savedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];
    setIsFavourite(savedFavourites.some((fav) => fav.imdbID === movie.imdbID));
  }, [movie]);

  const toggleFavourite = () => {
    const savedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];

    if (isFavourite) {
      // Remove from favourites
      const updatedFavourites = savedFavourites.filter((fav) => fav.imdbID !== movie.imdbID);
      localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
      setIsFavourite(false);
    } else {
      // Add to favourites
      const updatedFavourites = [...savedFavourites, movie];
      localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
      setIsFavourite(true);
    }
  };

  return (
    <button className={`favourite-button ${isFavourite ? "remove" : ""}`} onClick={toggleFavourite}>
      {isFavourite ? "Remove from Favourites" : "Add to Favourites"}
    </button>
  );
};

export default FavouriteButton;
