import { useState } from "react";
import { signUpWithEmail, loginWithEmail, signInWithGoogle } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import "../pages/AuthPage.css"; 

const AuthPage = ({ isSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        await signUpWithEmail(email, password);
      } else {
        await loginWithEmail(email, password);
      }
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleAuth = async () => {
    try {
      await signInWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
        {error && <p className="error-message">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>
        <button type="button" className="google-btn" onClick={handleGoogleAuth}>
          {isSignUp ? "Sign Up with Google" : "Sign In with Google"}
        </button>
        {!isSignUp && (
          <div className="remember-me">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <Link to="#">Forgot password?</Link>
          </div>
        )}
        <div className="auth-options">
          {isSignUp ? (
            <p>
              Already have an account? <Link to="/login">Sign In</Link>
            </p>
          ) : (
            <p>
              New to Movie App? <Link to="/signup">Sign Up now.</Link>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
