// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBItIJZ5-MkepShV7sfcIgCR-iQLZNsxmk",
  authDomain: "netflixgpt-443a9.firebaseapp.com",
  projectId: "netflixgpt-443a9",
  storageBucket: "netflixgpt-443a9.firebasestorage.app",
  messagingSenderId: "884191255220",
  appId: "1:884191255220:web:fb5260f1b75618faf2d5e1",
  measurementId: "G-M2WKDZVQJN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();