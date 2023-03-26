import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCuMv94sO74MZYi-UB3OB5OeG6zO3XQ4mA",
  authDomain: "booking-6321f.firebaseapp.com",
  projectId: "booking-6321f",
  storageBucket: "booking-6321f.appspot.com",
  messagingSenderId: "625258601658",
  appId: "1:625258601658:web:23645291e1bf0f12c6b683",
  measurementId: "G-MND8L3W7PR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;