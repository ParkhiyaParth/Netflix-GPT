// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPTYKrIzVLUJxOpZPtkQl2IGM5jtuEAm0",
  authDomain: "netflixgpt-5e82b.firebaseapp.com",
  projectId: "netflixgpt-5e82b",
  storageBucket: "netflixgpt-5e82b.appspot.com",
  messagingSenderId: "137323609889",
  appId: "1:137323609889:web:d162f436c84787404dc860",
  measurementId: "G-VJC7J85EVF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
