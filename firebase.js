// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBubzabE8_-I7va9R5kM7a6lUqpsb8rO_M",
  authDomain: "rn-movie-app-24c37.firebaseapp.com",
  projectId: "rn-movie-app-24c37",
  storageBucket: "rn-movie-app-24c37.appspot.com",
  messagingSenderId: "646549623720",
  appId: "1:646549623720:web:296f7aacf1747e5952c39d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dbService = getFirestore(app);
export const authService = getAuth(app);
