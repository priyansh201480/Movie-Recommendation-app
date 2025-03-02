import { useState, useEffect } from "react";
import FavouriteContext from "./FavouriteContext";

const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  // Load favourites from localStorage on mount
  useEffect(() => {
    const savedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(savedFavourites);
  }, []);

  // Save to localStorage when favourites change
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addFavourite = (movie) => {
    if (!favourites.find((fav) => fav.imdbID === movie.imdbID)) {
      setFavourites([...favourites, movie]);
    }
  };

  const removeFavourite = (movieID) => {
    setFavourites(favourites.filter((movie) => movie.imdbID !== movieID));
  };

  return (
    <FavouriteContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteProvider;
