// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "acinsights-2480f.firebaseapp.com",
  projectId: "acinsights-2480f",
  storageBucket: "acinsights-2480f.appspot.com",
  messagingSenderId: "767906726306",
  appId: "1:767906726306:web:3253f0c7c0abffd17a72fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

