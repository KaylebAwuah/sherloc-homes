// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sherloc-homes-1.firebaseapp.com",
  projectId: "sherloc-homes-1",
  storageBucket: "sherloc-homes-1.appspot.com",
  messagingSenderId: "708823324724",
  appId: "1:708823324724:web:f1bfe415d868fa40005261"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);