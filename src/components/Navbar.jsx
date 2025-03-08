import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import "../components/Navbar.css";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand"></Link>

      <div className="navbar-menu">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/favourites" className="nav-item">Favourites</Link>

        {user ? (
          <>
            <span className="nav-user">Welcome, {user.displayName}</span>
            <button onClick={handleSignOut} className="logout-btn">Logout</button>
          </>
        ) : (
          <Link to="/auth" className="nav-item">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
