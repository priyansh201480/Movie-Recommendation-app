import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from "firebase/auth";

const firebaseConfig = {
 apiKey: "AIzaSyBcsNoLWI3rgT_HFVu9laY_A-HRnNYJdKE",
  authDomain: "movie-recommendation-app-b3bfc.firebaseapp.com",
  projectId: "movie-recommendation-app-b3bfc",
  storageBucket: "movie-recommendation-app-b3bfc.firebasestorage.app",
  messagingSenderId: "138890225959",
  appId: "1:138890225959:web:e064cd1a9db44a9e11a102",
  measurementId: "G-CVY5VLDY5H"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Google Sign-In
export const signInWithGoogle = async () => {
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
};

// Email & Password Sign-Up
export const signUpWithEmail = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

// Email & Password Login
export const loginWithEmail = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

// Logout Function
export const logout = async () => {
  await signOut(auth);
};
