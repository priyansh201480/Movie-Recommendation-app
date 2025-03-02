import axios from "axios";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "http://www.omdbapi.com/";

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
    if (response.data.Response === "False") {
      console.warn("Error:", response.data.Error);
      return []; // 
    }
    return response.data.Search || [];
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    return [];
  }
};

export const getMovieDetails = async (imdbID) => {
  try {
    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${imdbID}`);
    if (response.data.Response === "False") {
      console.warn("Error:", response.data.Error);
      return null; // 
    }
    return response.data;
  } catch (error) {
    console.error("Failed to fetch movie details:", error);
    return null;
  }
};
