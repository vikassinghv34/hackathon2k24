
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import 'firebase/auth'; // If you're using Firebase Authentication
import { getAuth } from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt0s8FuBeGsXiuOo33fCSBQ9rViRVkAJU",
  authDomain: "training-portal-hztl.firebaseapp.com",
  projectId: "training-portal-hztl",
  storageBucket: "training-portal-hztl.appspot.com",
  messagingSenderId: "63582085473",
  appId: "1:63582085473:web:7c5805a4e03537a189a520"
};
// Initialize Firebase
console.log("IN FIREBASE FILE")

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth,app };