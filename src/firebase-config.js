// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHWXGRCZ1IFNx7n33Yt4LuZ5i84Z2V9jc",
  authDomain: "chatapp-e0fe3.firebaseapp.com",
  projectId: "chatapp-e0fe3",
  storageBucket: "chatapp-e0fe3.appspot.com",
  messagingSenderId: "625471868370",
  appId: "1:625471868370:web:a388270cfb5b7500a48c0b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
