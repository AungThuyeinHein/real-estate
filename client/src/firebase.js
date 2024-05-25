// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "prorealestate-82e93.firebaseapp.com",
  projectId: "prorealestate-82e93",
  storageBucket: "prorealestate-82e93.appspot.com",
  messagingSenderId: "979368695067",
  appId: "1:979368695067:web:b121d762aeae313648efbe",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
