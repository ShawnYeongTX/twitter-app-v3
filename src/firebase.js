// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrVkNxFlNquEdXWGsy9KECp7FnXOhTyb8",
  authDomain: "twitter-app-v3.firebaseapp.com",
  projectId: "twitter-app-v3",
  storageBucket: "twitter-app-v3.firebasestorage.app",
  messagingSenderId: "216481792264",
  appId: "1:216481792264:web:3fb17ae1a26638aed5acbd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app)
