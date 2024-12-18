/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// require('dotenv').config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  apiKey:"AIzaSyCPTYKrIzVLUJxOpZPtkQl2IGM5jtuEAm0",
  authDomain: "netflixgpt-5e82b.firebaseapp.com",
  projectId: "netflixgpt-5e82b",
  storageBucket: "netflixgpt-5e82b.appspot.com",
  messagingSenderId: "137323609889",
  appId: "1:137323609889:web:d162f436c84787404dc860",
  measurementId: "G-VJC7J85EVF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
