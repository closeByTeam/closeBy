// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBJPu30vQCvUU1vWsesCAN1KB6FZGd8d50",

  authDomain: "closeby-3949c.firebaseapp.com",

  databaseURL: "https://closeby-3949c-default-rtdb.firebaseio.com",

  projectId: "closeby-3949c",

  storageBucket: "closeby-3949c.appspot.com",

  messagingSenderId: "375301362415",

  appId: "1:375301362415:web:6a01bef5622f157c26011a",

  measurementId: "G-Z01MRTDR70",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);