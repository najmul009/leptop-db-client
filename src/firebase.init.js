// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr7bEfaKUxmmgiq3bSApOjCxqv-8HtjqY",
  authDomain: "leptop-db.firebaseapp.com",
  projectId: "leptop-db",
  storageBucket: "leptop-db.appspot.com",
  messagingSenderId: "451773000407",
  appId: "1:451773000407:web:ecd7f9d2267e64345e5e92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;