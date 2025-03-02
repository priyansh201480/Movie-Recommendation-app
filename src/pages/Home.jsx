import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import { searchMovies } from "../api"; // 
import "./Home.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async (query) => {
  const results = await searchMovies(query);  
  setMovies(results);
  setError(results.length === 0 ? "No movies found" : ""); 
};

  return (
    <div className="container">
      <SearchBar onSearch={handleSearch} />
      {error && <p className="error">{error}</p>}
      <div className="movie-list">
       { movies.length > 0 ? (
    movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
) : (
    error ? <p className="error">{error}</p> : null // Show error only if there's an issue
)}

      </div>
    </div>
  );
};

export default Home;


