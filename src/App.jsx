import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase"; 
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import MovieDetails from "./pages/MovieDetails";
import Auth from "./pages/AuthPage"; // 
import Signup from "./pages/Signup"

const PrivateRoute = ({element}) => {
  const [user] = useAuthState(auth);
  return user ? element : <Navigate to="/auth" />;
};

const App = () => {
  return (
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
  );
};

export default App;
