// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = initializeApp({
  apiKey: "AIzaSyCjEPsOzb_KkOGluRMWAjuPr06aUieWZqQ",
  authDomain: "netflixgpt-b1f7f.firebaseapp.com",
  projectId: "netflixgpt-b1f7f",
  storageBucket: "netflixgpt-b1f7f.firebasestorage.app",
  messagingSenderId: "663273312311",
  appId: "1:663273312311:web:57cf69e8d0792488136fb2",
  measurementId: "G-ZYFQ80WFWX"
});
const analytics = getAnalytics(app);
export const auth = getAuth();