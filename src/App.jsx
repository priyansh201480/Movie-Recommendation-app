import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase"; 
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import MovieDetails from "./pages/MovieDetails";
import Auth from "./pages/AuthPage"; // Google Authentication page
import FavouriteProvider from "./context/FavouriteProvider";
import Signup from "./pages/signUp"

const PrivateRoute = ({element}) => {
  const [user] = useAuthState(auth);
  return user ? element : <Navigate to="/auth" />;
};

const App = () => {
  return (
    <FavouriteProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<PrivateRoute element={<Home />} />} />
          <Route path="/favourites" element={<PrivateRoute element={<Favourites />} />} />
          <Route path="/movie/:imdbID" element={<PrivateRoute element={<MovieDetails />} />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Auth />} />


        </Routes>
      </Router>
    </FavouriteProvider>
  );
};

export default App;
