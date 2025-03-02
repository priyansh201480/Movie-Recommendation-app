import { useContext } from "react";
import FavouriteContext from "./FavouriteContext";

const useFavourites = () => useContext(FavouriteContext);

export default useFavourites;
